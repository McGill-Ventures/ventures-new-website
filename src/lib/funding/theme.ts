// Visual system for the funding tool, aligned to the Growth Studio brand
// (purple #3a1fb0, yellow #f3f13a, ink #241454, Space Grotesk headings,
// Hanken Grotesk body). Every funding page imports from here.

export const T = {
  primary: "#3a1fb0",
  primaryHover: "#2e188f",
  primarySoft: "#ece9f9",
  primaryRing: "#c9c1ec",
  yellow: "#f3f13a",

  canvasTop: "#f6f5fb",
  canvasBottom: "#f6f5fb",
  surface: "#FFFFFF",

  ink: "#241454",
  inkSoft: "#4a3f78",
  muted: "#6f6790",
  line: "#e3e0ee",
  lineSoft: "#efedf5",

  success: "#16A34A",
  successSoft: "#DCFCE7",
  amber: "#B45309",
  amberSoft: "#FEF3C7",
  danger: "#B91C1C",

  radiusCard: 4,
  radiusOption: 3,
  radiusBtn: 2,
  shadow: "0 18px 40px rgba(36, 20, 84, 0.10)",
  shadowSoft: "0 1px 0 rgba(36, 20, 84, 0.06)",

  font: "var(--font-hanken-grotesk), system-ui, sans-serif",
  headingFont: "var(--font-space-grotesk), sans-serif",
} as const;

// Chip colors cycled across options so each card reads distinctly.
export const CHIPS = [
  { bg: "#ece9f9", fg: "#3a1fb0" }, // brand purple
  { bg: "#f9f8d0", fg: "#6b6600" }, // brand yellow (darkened text for contrast)
  { bg: "#DBEAFE", fg: "#1D4ED8" }, // blue
  { bg: "#DCFCE7", fg: "#15803D" }, // green
  { bg: "#D1FAE5", fg: "#047857" }, // teal
  { bg: "#FFEDD5", fg: "#C2410C" }, // orange
  { bg: "#FCE7F3", fg: "#BE185D" }, // pink
  { bg: "#FEF3C7", fg: "#B45309" }, // amber
] as const;

export function chipFor(i: number) {
  return CHIPS[i % CHIPS.length];
}
