"use client";

import { useEffect } from "react";

/**
 * Behaviour layer for the Growth Studio pages.
 *
 * All markup is server-rendered; this component only attaches behaviour to it
 * after mount. That ordering is deliberate for the scroll reveals: the HTML
 * ships fully VISIBLE, and the hidden/animated state is applied here. With no
 * JS, slow JS, or a JS error, the content simply stays visible.
 */

const SERVICES: { label: string; desc: string }[] = [
  {
    label: "Industry, Market & Competitor Analysis",
    desc: "Identify market trends, competitors, and whitespace opportunities to help inform your positioning and investor narrative. (Required internally for our consultants to build context).",
  },
  {
    label: "Fundraising & Capital Strategy",
    desc: "Investor-meeting prep, mock pitch sessions, and valuation alignment.",
  },
  {
    label: "CRM & Investor Pipeline",
    desc: "Build a custom investor pipeline with structured CRM tracking, VC/angel sourcing, segmentation by stage, and outreach prioritization.",
  },
  {
    label: "Go-to-Market Strategy",
    desc: "Support in refining your customer targeting, messaging, acquisition channels, and go-to-market motion. Output includes GTM summary and investor-facing slide support.",
  },
  {
    label: "Pitch Deck Development",
    desc: "Refine or rebuild your investor deck to strengthen clarity, storytelling, and traction framing. Includes visual/structure edits, content feedback, and optional mock pitch session.",
  },
  {
    label: "Beta Tester Database and Interview Strategy",
    desc: "Source early users, define ideal testers, and create outreach and interview materials. Option to synthesize user insights for product feedback or pitch refinement.",
  },
  {
    label: "Cap Table Setup (non-legal)",
    desc: "Understand and model your cap table for smart fundraising decisions.",
  },
  {
    label: "Resource Access",
    desc: "Co-working, incubators, mentors, legal/government programs & the McGill Ventures ecosystem.",
  },
];

const PURPLE = "#3a1fb0";
const YELLOW = "#f3f13a";

export default function Interactions() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".gs-root");
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: (() => void)[] = [];

    // ---- hover effects -------------------------------------------------
    root.querySelectorAll<HTMLElement>("[data-hover]").forEach((el) => {
      let cfg: Record<string, string>;
      try {
        cfg = JSON.parse(el.getAttribute("data-hover") || "");
      } catch {
        return;
      }
      const keys = Object.keys(cfg);
      const base: Record<string, string> = {};
      keys.forEach((k) => {
        base[k] = el.style.getPropertyValue(k) || (el.style as never as Record<string, string>)[k] || "";
      });
      const on = () => keys.forEach((k) => { (el.style as never as Record<string, string>)[k] = cfg[k]; });
      const off = () => keys.forEach((k) => { (el.style as never as Record<string, string>)[k] = base[k]; });
      el.addEventListener("mouseenter", on);
      el.addEventListener("mouseleave", off);
      cleanups.push(() => {
        el.removeEventListener("mouseenter", on);
        el.removeEventListener("mouseleave", off);
      });
    });

    root.querySelectorAll<HTMLElement>("[data-card]").forEach((card) => {
      const base = card.style.boxShadow;
      const on = () => {
        card.style.transform = "translateY(-6px)";
        card.style.boxShadow = "0 18px 40px rgba(36,20,84,.14)";
        card.style.borderColor = "var(--purple,#3a1fb0)";
      };
      const off = () => {
        card.style.transform = "";
        card.style.boxShadow = base;
        card.style.borderColor = "rgba(36,20,84,.14)";
      };
      card.addEventListener("mouseenter", on);
      card.addEventListener("mouseleave", off);
      cleanups.push(() => {
        card.removeEventListener("mouseenter", on);
        card.removeEventListener("mouseleave", off);
      });
    });

    // ---- radar ---------------------------------------------------------
    const box = root.querySelector<HTMLElement>("[data-radar]");
    let radarRaf = 0;
    if (box) {
      const octagon = box.querySelector<SVGPolygonElement>('[data-role="base-octagon"]');
      const dots = [0, 1, 2, 3, 4, 5, 6, 7].map((i) =>
        box.querySelector<SVGCircleElement>(`[data-dot="${i}"]`),
      );
      const labels = [0, 1, 2, 3, 4, 5, 6, 7].map((i) =>
        box.querySelector<HTMLElement>(`[data-label="${i}"]`),
      );
      const numEl = box.querySelector<SVGTextElement>("[data-active-num]");
      const numEl2 = root.querySelector<HTMLElement>("[data-active-num-2]");
      const titleEl = root.querySelector<HTMLElement>("[data-active-title]");
      const descEl = root.querySelector<HTMLElement>("[data-active-desc]");

      const cx = 280, cy = 280, baseR = 100, hoverR = 145;
      const angles = [-90, -45, 0, 45, 90, 135, 180, 225];
      const toXY = (deg: number, r: number) => {
        const rad = (deg * Math.PI) / 180;
        return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
      };
      const radii = angles.map(() => baseR);
      let hoverIndex: number | null = null;

      const setActive = (i: number | null) => {
        hoverIndex = i;
        labels.forEach((el, idx) => {
          if (!el) return;
          const on = idx === i;
          el.style.color = on ? PURPLE : "#241454";
          el.style.transform = on
            ? "translate(-50%,-50%) translateY(3px)"
            : "translate(-50%,-50%)";
          el.style.boxShadow = on ? "0 0 0 rgba(36,20,84,.3)" : "0 3px 0 rgba(36,20,84,.28)";
          el.style.background = on ? YELLOW : "#fff";
          el.style.borderColor = on ? PURPLE : "rgba(36,20,84,.28)";
        });
        dots.forEach((el, idx) => {
          if (el) el.setAttribute("fill", idx === i ? YELLOW : PURPLE);
        });
        if (octagon) {
          octagon.setAttribute("fill", i === null ? "rgba(58,31,176,.14)" : "rgba(243,241,58,.35)");
          octagon.setAttribute("stroke", i === null ? PURPLE : YELLOW);
        }
        if (i === null) {
          if (numEl) numEl.textContent = "";
          if (numEl2) numEl2.textContent = "";
          if (titleEl) titleEl.textContent = "Hover a facet to learn more";
          if (descEl)
            descEl.textContent =
              "Eight interconnected ways we get founders investor-ready — explore the chart to see how each one works.";
        } else {
          const s = SERVICES[i];
          const num = String(i + 1).padStart(2, "0");
          if (numEl) numEl.textContent = num;
          if (numEl2) numEl2.textContent = num;
          if (titleEl) titleEl.textContent = s.label;
          if (descEl) descEl.textContent = s.desc;
        }
      };

      labels.forEach((el, i) => {
        if (!el) return;
        const on = () => setActive(i);
        const off = () => setActive(null);
        el.addEventListener("pointerenter", on);
        el.addEventListener("mouseenter", on);
        el.addEventListener("click", on);
        el.addEventListener("touchstart", on, { passive: true });
        el.addEventListener("mouseleave", off);
        cleanups.push(() => {
          el.removeEventListener("pointerenter", on);
          el.removeEventListener("mouseenter", on);
          el.removeEventListener("click", on);
          el.removeEventListener("touchstart", on);
          el.removeEventListener("mouseleave", off);
        });
      });

      const animate = () => {
        const pts: string[] = [];
        for (let i = 0; i < 8; i++) {
          const target = hoverIndex === i ? hoverR : baseR;
          radii[i] += (target - radii[i]) * 0.16;
          const { x, y } = toXY(angles[i], radii[i]);
          pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
          const dot = dots[i];
          if (dot) {
            dot.setAttribute("cx", x.toFixed(1));
            dot.setAttribute("cy", y.toFixed(1));
            dot.setAttribute("r", hoverIndex === i ? "7" : "5");
          }
        }
        if (octagon) octagon.setAttribute("points", pts.join(" "));
        radarRaf = requestAnimationFrame(animate);
      };
      animate();
      cleanups.push(() => cancelAnimationFrame(radarRaf));
    }

    // ---- reveals -------------------------------------------------------
    const reveals = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduce) {
      root.querySelectorAll<HTMLElement>("[data-float]").forEach((el) => {
        el.style.animation = "none";
      });
      // Content is already visible from SSR — nothing to reveal.
      return () => cleanups.forEach((fn) => fn());
    }

    reveals.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(26px)";
      el.style.transition =
        "opacity .7s cubic-bezier(.2,.7,.3,1), transform .7s cubic-bezier(.2,.7,.3,1)";
      el.style.willChange = "opacity, transform";
    });

    const pending = new Set(reveals);
    const timers: ReturnType<typeof setTimeout>[] = [];
    const inView = (el: HTMLElement, frac: number) => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return r.top < vh * frac && r.bottom > 0;
    };
    const show = (el: HTMLElement) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    };
    const sweep = () => {
      pending.forEach((el) => {
        if (inView(el, 0.92)) {
          pending.delete(el);
          const delay = parseInt(el.dataset.delay || "0", 10);
          timers.push(setTimeout(() => show(el), delay));
          timers.push(
            setTimeout(() => {
              el.style.transition = "none";
              show(el);
            }, delay + 900),
          );
        }
      });
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        sweep();
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    sweep();
    [120, 400, 900, 1600].forEach((t) => timers.push(setTimeout(sweep, t)));
    // Hard fallback: nothing may stay invisible if inView ever misjudges.
    timers.push(
      setTimeout(() => {
        pending.forEach((el) => {
          el.style.transition = "none";
          show(el);
        });
        pending.clear();
      }, 2400),
    );

    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      timers.forEach(clearTimeout);
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
