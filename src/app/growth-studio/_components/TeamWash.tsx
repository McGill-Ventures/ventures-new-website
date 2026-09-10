"use client";

import { useEffect } from "react";

type BlobDef = { c: string; size: number; dur: string };

const BLOB_DEFS: BlobDef[] = [
  {
    c: "radial-gradient(circle at 45% 45%, rgba(58,31,176,.5), rgba(58,31,176,0) 68%)",
    size: 1.18,
    dur: ".95s",
  },
  {
    c: "radial-gradient(circle at 55% 50%, rgba(150,72,214,.5), rgba(150,72,214,0) 66%)",
    size: 0.92,
    dur: ".6s",
  },
  {
    c: "radial-gradient(circle at 72% 30%, rgba(243,241,58,.7), rgba(243,241,58,0) 55%)",
    size: 0.64,
    dur: ".36s",
  },
];

/**
 * Team page only: per-card photo reveal plus the watercolour wash that trails
 * the cursor. Purely decorative — it mounts nothing on the server and is
 * skipped entirely under prefers-reduced-motion.
 */
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

    // Watercolour wash following the cursor
    const layer = document.createElement("div");
    // growth-studio.css hides [data-splash] below 900px, so the breakpoint lives
    // in CSS only and survives a resize. A JS check here would not.
    layer.setAttribute("data-splash", "");
    layer.style.cssText =
      "position:fixed;inset:0;z-index:0;pointer-events:none;opacity:0;transition:opacity .6s ease;overflow:hidden;";

    const sizes: number[] = [];
    const blobs = BLOB_DEFS.map((d, i) => {
      const b = document.createElement("span");
      sizes.push(d.size);
      b.style.cssText =
        "position:absolute;left:50%;top:50%;background:" +
        d.c +
        ";border-radius:48% 52% 43% 57% / 53% 45% 55% 47%;filter:url(#gs-watercolor) blur(14px);" +
        "transform:translate(-50%,-50%);will-change:left,top;" +
        "transition:left " +
        d.dur +
        " cubic-bezier(.2,.7,.3,1), top " +
        d.dur +
        " cubic-bezier(.2,.7,.3,1);" +
        "animation:gs-wc-morph " +
        (7 + i * 2) +
        "s ease-in-out infinite;";
      layer.appendChild(b);
      return b;
    });

    page.style.position = "relative";
    page.insertBefore(layer, page.firstChild);

    const sizeBlobs = () => {
      const h = window.innerHeight || 800;
      blobs.forEach((b, i) => {
        const s = h * sizes[i] * 0.5;
        b.style.width = s + "px";
        b.style.height = s + "px";
      });
    };
    sizeBlobs();
    window.addEventListener("resize", sizeBlobs, { passive: true });

    let entered = false;
    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      if (!entered) {
        blobs.forEach((b) => {
          const t = b.style.transition;
          b.style.transition = "none";
          b.style.left = x + "px";
          b.style.top = y + "px";
          void b.offsetWidth;
          b.style.transition = t;
        });
        entered = true;
        layer.style.opacity = "1";
      } else {
        blobs.forEach((b) => {
          b.style.left = x + "px";
          b.style.top = y + "px";
        });
      }
    };
    const onLeave = () => {
      layer.style.opacity = "0";
      entered = false;
    };

    page.addEventListener("mousemove", onMove);
    page.addEventListener("mouseleave", onLeave);

    cleanups.push(() => {
      window.removeEventListener("resize", sizeBlobs);
      page.removeEventListener("mousemove", onMove);
      page.removeEventListener("mouseleave", onLeave);
      layer.remove();
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
