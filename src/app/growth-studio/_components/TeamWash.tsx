"use client";

import { useEffect } from "react";

/**
 * Team page only: per-card photo reveal plus the watercolour wash that trails
 * the cursor. Purely decorative. It mounts nothing on the server and the wash
 * is skipped entirely under prefers-reduced-motion.
 *
 * Performance contract for the wash (this is what a regression would break):
 *   1. The watercolour look (turbulence + displacement + blur) is rendered
 *      ONCE per blob into a canvas. Nothing with a live `filter` ever moves.
 *   2. While the cursor moves, the only style that changes is `transform` on
 *      elements that already have their own compositor layer. No `left`/`top`,
 *      no `border-radius` animation, no layout, no repaint.
 *   3. The animation loop sleeps when the blobs have caught up with the cursor.
 *
 * The previous version put `filter: url(#gs-watercolor) blur(14px)` on three
 * large elements, moved them with `left`/`top` transitions and animated their
 * `border-radius`. That re-ran the SVG displacement filter on every frame
 * (slow), and partial repaints of the displaced pixels left line artefacts.
 */

type BlobDef = {
  /** r,g,b of the wash colour. */
  rgb: string;
  /** Peak opacity at the gradient centre. */
  alpha: number;
  /** Gradient centre as a fraction of the blob box. */
  cx: number;
  cy: number;
  /** Where the gradient reaches full transparency (fraction of its radius). */
  stop: number;
  /** Blob box size as a fraction of half the viewport height. */
  size: number;
  /** Follow lag: seconds for the blob to close ~63% of the gap to the cursor. */
  tau: number;
};

const BLOB_DEFS: BlobDef[] = [
  { rgb: "58,31,176", alpha: 0.5, cx: 0.45, cy: 0.45, stop: 0.68, size: 1.18, tau: 0.22 },
  { rgb: "150,72,214", alpha: 0.5, cx: 0.55, cy: 0.5, stop: 0.66, size: 0.92, tau: 0.14 },
  { rgb: "243,241,58", alpha: 0.7, cx: 0.72, cy: 0.3, stop: 0.55, size: 0.64, tau: 0.085 },
];

// Room around the blob box for the displaced and blurred edge (px).
const PAD = 96;
// Bake at 1 canvas px per CSS px at most (the result is a soft blur, so retina
// resolution would cost memory and show nothing), and stop growing the bitmap
// past this viewport height. Taller screens stretch it; the blur hides that.
// Keeps the three canvases near 9 MB instead of ~48 MB on a 4K portrait screen.
const MAX_BAKE_HEIGHT = 1440;

/** The blob as a standalone SVG: irregular shape, radial fade, watercolour filter. */
function blobSvg(d: BlobDef, s: number): string {
  const w = s + PAD * 2;
  // CSS `radial-gradient(circle at cx cy, ...)` sizes to the farthest corner.
  const r = Math.hypot(Math.max(d.cx, 1 - d.cx), Math.max(d.cy, 1 - d.cy)) * s;
  const n = (v: number) => v.toFixed(1);
  // Same outline as `border-radius: 48% 52% 43% 57% / 53% 45% 55% 47%`.
  const path =
    `M${n(0.48 * s)},0 ` +
    `A${n(0.52 * s)},${n(0.45 * s)} 0 0 1 ${n(s)},${n(0.45 * s)} ` +
    `A${n(0.43 * s)},${n(0.55 * s)} 0 0 1 ${n(0.57 * s)},${n(s)} ` +
    `A${n(0.57 * s)},${n(0.47 * s)} 0 0 1 0,${n(0.53 * s)} ` +
    `A${n(0.48 * s)},${n(0.53 * s)} 0 0 1 ${n(0.48 * s)},0 Z`;
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${n(w)}" height="${n(w)}" viewBox="0 0 ${n(w)} ${n(w)}">` +
    `<defs>` +
    `<radialGradient id="g" gradientUnits="userSpaceOnUse" cx="${n(d.cx * s)}" cy="${n(d.cy * s)}" r="${n(r)}">` +
    `<stop offset="0" stop-color="rgb(${d.rgb})" stop-opacity="${d.alpha}"/>` +
    `<stop offset="${d.stop}" stop-color="rgb(${d.rgb})" stop-opacity="0"/>` +
    `</radialGradient>` +
    `<filter id="f" filterUnits="userSpaceOnUse" x="${-PAD}" y="${-PAD}" width="${n(w)}" height="${n(w)}" color-interpolation-filters="sRGB">` +
    `<feTurbulence type="fractalNoise" baseFrequency="0.013" numOctaves="4" seed="7" result="noise"/>` +
    `<feDisplacementMap in="SourceGraphic" in2="noise" scale="42" xChannelSelector="R" yChannelSelector="G"/>` +
    `<feGaussianBlur stdDeviation="14"/>` +
    `</filter>` +
    `</defs>` +
    `<g transform="translate(${PAD},${PAD})"><path d="${path}" fill="url(#g)" filter="url(#f)"/></g>` +
    `</svg>`
  );
}

/**
 * Render the blob SVG into a canvas once. Resolves false if the browser can't,
 * or if `isCurrent` says a newer bake (or an unmount) has superseded this one.
 */
async function bake(
  canvas: HTMLCanvasElement,
  d: BlobDef,
  s: number,
  scale: number,
  isCurrent: () => boolean,
): Promise<boolean> {
  const w = Math.round((s + PAD * 2) * scale);
  const img = new Image();
  img.decoding = "async";
  img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(blobSvg(d, s));
  try {
    await img.decode();
  } catch {
    return false;
  }
  // A slower, older decode must not overwrite a newer bitmap.
  if (!isCurrent()) return false;
  const ctx = canvas.getContext("2d");
  if (!ctx) return false;
  canvas.width = w;
  canvas.height = w;
  ctx.clearRect(0, 0, w, w);
  ctx.drawImage(img, 0, 0, w, w);
  return true;
}

export default function TeamWash() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>("[data-team-page]");
    if (!page) return;

    const cleanups: (() => void)[] = [];

    // Per-card photo reveal
    page.querySelectorAll<HTMLElement>("[data-team-card]").forEach((card) => {
      const photo = card.querySelector<HTMLElement>("[data-photo]");
      if (!photo) return;
      const on = () => {
        photo.style.filter = "grayscale(0)";
        photo.style.transform = "scale(1.05)";
      };
      const off = () => {
        photo.style.filter = "grayscale(1)";
        photo.style.transform = "none";
      };
      card.addEventListener("mouseenter", on);
      card.addEventListener("mouseleave", off);
      cleanups.push(() => {
        card.removeEventListener("mouseenter", on);
        card.removeEventListener("mouseleave", off);
      });
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => cleanups.forEach((fn) => fn());
    }

    // ---- Watercolour wash following the cursor ----
    let disposed = false;

    const layer = document.createElement("div");
    // growth-studio.css hides [data-splash] below 900px, so the breakpoint lives
    // in CSS only and survives a resize. A JS check here would not.
    layer.setAttribute("data-splash", "");
    layer.setAttribute("aria-hidden", "true");
    layer.style.cssText =
      "position:fixed;inset:0;z-index:0;pointer-events:none;opacity:0;" +
      "transition:opacity .6s ease;overflow:hidden;contain:strict;";

    type Blob = {
      def: BlobDef;
      mover: HTMLElement;
      canvas: HTMLCanvasElement;
      /** Half the mover's box, so the blob centres on the cursor. */
      half: number;
      x: number;
      y: number;
    };

    const blobs: Blob[] = BLOB_DEFS.map((def, i) => {
      // mover: positioned by the rAF loop, transform only.
      const mover = document.createElement("span");
      mover.style.cssText =
        "position:absolute;left:0;top:0;display:block;will-change:transform;" +
        "transform:translate3d(-9999px,-9999px,0);";
      // canvas: the baked blob. Its slow wobble is a compositor-only animation.
      const canvas = document.createElement("canvas");
      canvas.style.cssText = "display:block;width:100%;height:100%;will-change:transform;";
      mover.appendChild(canvas);
      layer.appendChild(mover);

      // Replaces the old border-radius morph: gentle breathing, transform only.
      const turn = i % 2 === 0 ? 1 : -1;
      canvas.animate?.(
        [
          { transform: `rotate(${-7 * turn}deg) scale(1)` },
          { transform: `rotate(${7 * turn}deg) scale(1.05)` },
        ],
        { duration: (7 + i * 2) * 1000, direction: "alternate", iterations: Infinity, easing: "ease-in-out" },
      );

      return { def, mover, canvas, half: 0, x: 0, y: 0 };
    });

    page.style.position = "relative";
    page.insertBefore(layer, page.firstChild);

    // ---- follow-loop state ----
    let targetX = 0;
    let targetY = 0;
    let entered = false;
    let raf = 0;
    let lastT = 0;

    // ---- sizing + one-time bake (re-run only when the viewport height changes) ----
    let ready = false;
    let bakedForHeight = 0;
    let bakeRun = 0;

    const place = (b: Blob) => {
      b.mover.style.transform = `translate3d(${(b.x - b.half).toFixed(1)}px,${(b.y - b.half).toFixed(1)}px,0)`;
    };

    const sizeAndBake = async () => {
      // Hidden below 900px by CSS: don't spend memory on something never shown
      // (phone URL bars change innerHeight constantly).
      if (getComputedStyle(layer).display === "none") return;
      const h = window.innerHeight || 800;
      if (h === bakedForHeight) return;
      bakedForHeight = h;
      const run = ++bakeRun;
      const isCurrent = () => !disposed && run === bakeRun;
      const scale = Math.min(1, MAX_BAKE_HEIGHT / h);
      const results = await Promise.all(
        blobs.map(async (b) => {
          const s = Math.round(h * b.def.size * 0.5);
          const ok = await bake(b.canvas, b.def, s, scale, isCurrent);
          if (ok && isCurrent()) {
            const box = s + PAD * 2;
            b.half = box / 2;
            b.mover.style.width = box + "px";
            b.mover.style.height = box + "px";
            place(b);
          }
          return ok;
        }),
      );
      if (!isCurrent()) return;
      // If the browser could not render the blobs, stay invisible rather than
      // show empty boxes. The wash is decoration only. Forget the height so the
      // next resize retries, and reset `entered` so a later success fades in.
      ready = results.every(Boolean);
      if (!ready) {
        layer.style.opacity = "0";
        bakedForHeight = 0;
        entered = false;
      }
    };
    void sizeAndBake();

    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => void sizeAndBake(), 200);
    };
    window.addEventListener("resize", onResize, { passive: true });

    // ---- follow loop: runs only while a blob is still catching up ----
    const tick = (now: number) => {
      // Clamp dt: a long frame can't make the blobs jump, and the first tick
      // (rAF time can be just before performance.now()) can't run backwards.
      const dt = Math.max(0, Math.min((now - lastT) / 1000, 0.05));
      lastT = now;
      let moving = false;
      for (const b of blobs) {
        const k = 1 - Math.exp(-dt / b.def.tau);
        const dx = targetX - b.x;
        const dy = targetY - b.y;
        if (Math.abs(dx) > 0.3 || Math.abs(dy) > 0.3) {
          b.x += dx * k;
          b.y += dy * k;
          moving = true;
        } else {
          b.x = targetX;
          b.y = targetY;
        }
        place(b);
      }
      raf = moving ? requestAnimationFrame(tick) : 0;
    };

    const wake = () => {
      if (raf) return;
      lastT = performance.now();
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!ready) return;
      if (!entered) {
        // First move after entering: start under the cursor, no fly-in.
        for (const b of blobs) {
          b.x = targetX;
          b.y = targetY;
          place(b);
        }
        entered = true;
        layer.style.opacity = "1";
      }
      wake();
    };
    const onLeave = () => {
      layer.style.opacity = "0";
      entered = false;
    };

    page.addEventListener("mousemove", onMove, { passive: true });
    page.addEventListener("mouseleave", onLeave);

    cleanups.push(() => {
      disposed = true;
      clearTimeout(resizeTimer);
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      page.removeEventListener("mousemove", onMove);
      page.removeEventListener("mouseleave", onLeave);
      layer.remove();
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
