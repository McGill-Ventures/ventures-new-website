type NavHeader = HTMLElement & { navSync?: AbortController };

/** Marks the bar `data-on-dark` while the first section-wide opaque background
 *  under the island is dark. The root layout inlines this source so the bar
 *  reacts before hydration, so it must not reference anything outside its own body. */
export function syncNav(header = document.querySelector<NavHeader>("[data-nav]")) {
  if (!header) return;
  header.navSync?.abort();
  const controller = (header.navSync = new AbortController());
  const probe = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
  if (!probe) return;
  const update = () => {
    let dark = false;
    // 40 is the island's centre: pt-3 (12px) plus half of h-14 (28px).
    for (const el of document.elementsFromPoint(window.innerWidth / 2, 40)) {
      // Narrower elements (cards, photos) are skipped so they do not flicker the bar.
      if (header.contains(el) || el.getBoundingClientRect().width < window.innerWidth / 2) continue;
      // Painting the colour normalises oklch, oklab and color-mix to sRGB bytes.
      probe.clearRect(0, 0, 1, 1);
      probe.fillStyle = window.getComputedStyle(el).backgroundColor;
      probe.fillRect(0, 0, 1, 1);
      const [r, g, b, a] = probe.getImageData(0, 0, 1, 1).data;
      if (a < 128) continue;
      dark = 0.2126 * r + 0.7152 * g + 0.0722 * b < 128;
      break;
    }
    header.toggleAttribute("data-on-dark", dark);
    // Only read by a bar that opts in with data-hide-at-top.
    header.toggleAttribute("data-at-top", window.scrollY < 80);
  };
  update();
  // Scroll and resize already fire at most once per frame.
  window.addEventListener("scroll", update, { passive: true, signal: controller.signal });
  window.addEventListener("resize", update, { signal: controller.signal });
  return () => controller.abort();
}
