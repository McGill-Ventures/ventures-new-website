type NavHeader = HTMLElement & { navSync?: AbortController };

/** Mirrors the scroll position onto the bar as `data-scrolled` and `data-on-dark`.
 *  The root layout inlines this source so the bar reacts before hydration, so it
 *  must not reference anything outside its own body. */
export function syncNav(header = document.querySelector<NavHeader>("[data-nav]")) {
  if (!header) return;
  header.navSync?.abort();
  const controller = (header.navSync = new AbortController());
  const darkOver = header.dataset.darkOver;
  // Seeds off the exit threshold; seeding off the entry one leaves an 8-64 dead zone.
  let scrolled = window.scrollY > 8;
  const update = () => {
    // Separate thresholds: one would let scroll jitter re-trigger endlessly.
    scrolled = scrolled ? window.scrollY > 8 : window.scrollY > 64;
    header.toggleAttribute("data-scrolled", scrolled);
    if (!darkOver) return;
    // 64 is the condensed bar: dark while a dark section spans its bottom edge.
    const dark = Array.from(document.querySelectorAll(darkOver)).some((section) => {
      const { top, bottom } = section.getBoundingClientRect();
      return top <= 64 && bottom > 64;
    });
    header.toggleAttribute("data-on-dark", dark);
  };
  update();
  window.addEventListener("scroll", update, { passive: true, signal: controller.signal });
  window.addEventListener("resize", update, { signal: controller.signal });
  return () => controller.abort();
}
