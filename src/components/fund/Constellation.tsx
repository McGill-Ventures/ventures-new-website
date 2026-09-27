type Point = [x: number, y: number];

/** Brightness: 1 faint dot, 2 dot, 3 four-point sparkle. */
type Star = [x: number, y: number, brightness: 1 | 2 | 3];

const ZERO: Point[] = [
  [50, 6], [75, 20], [90, 56], [90, 100], [75, 136],
  [50, 150], [25, 136], [10, 100], [10, 56], [25, 20],
];

// Nudged a little so the two zeros read as stars rather than a copy-paste.
const ZERO_TWO: Point[] = [
  [50, 5], [76, 21], [90, 57], [91, 99], [74, 137],
  [50, 151], [26, 135], [10, 101], [11, 55], [24, 21],
];

const shift = (dx: number, points: Point[]): Point[] => points.map(([x, y]) => [x + dx, y]);
const ring = (points: Point[]): Point[] => [...points, points[0]];

const S: Point[] = [
  [88, 30], [64, 8], [34, 8], [14, 30], [22, 58],
  [78, 90], [88, 118], [66, 144], [32, 144], [10, 120],
];

const FIVE = shift(134, [
  [92, 8], [26, 8], [20, 66], [48, 56], [76, 62],
  [92, 86], [92, 116], [74, 142], [44, 148], [16, 132],
]);

const LINES: Point[][] = [
  S,
  [[50, -14], [50, 8]],
  [[50, 144], [50, 164]],
  FIVE,
  ring(shift(268, ZERO)),
  ring(shift(402, ZERO_TWO)),
  [[548, 4], [548, 150]],
  [[626, 4], [548, 100]],
  [[574, 68], [628, 150]],
];

const withBrightness = (points: Point[], levels: Star[2][]): Star[] =>
  points.map(([x, y], i) => [x, y, levels[i]]);

const STARS: Star[] = [
  ...withBrightness(S, [2, 1, 1, 2, 1, 2, 1, 1, 1, 2]),
  [50, -14, 3],
  [50, 164, 2],
  ...withBrightness(FIVE, [3, 2, 2, 1, 1, 2, 1, 1, 2, 1]),
  ...withBrightness(shift(268, ZERO), [3, 1, 2, 1, 1, 2, 1, 2, 1, 1]),
  ...withBrightness(shift(402, ZERO_TWO), [2, 1, 1, 2, 1, 3, 1, 1, 2, 1]),
  [548, 4, 2],
  [548, 150, 2],
  [626, 4, 3],
  [548, 100, 1],
  [574, 68, 1],
  [628, 150, 2],
];

const DOT = { 1: 1.3, 2: 2 } as const;
const GLOW = { 1: 5, 2: 8, 3: 15 } as const;

/** "$500K" drawn as a constellation: stars at each turn of the figures, joined
 *  by faint lines. Decorative, since the amount is stated in text below. */
export function Constellation({ className }: { className?: string }) {
  return (
    <svg viewBox="-12 -32 664 212" fill="none" aria-hidden className={className}>
      <defs>
        <radialGradient id="star-glow">
          <stop offset="0" stopColor="#f5f3ff" stopOpacity="0.9" />
          <stop offset="0.3" stopColor="#d8b4fe" stopOpacity="0.35" />
          <stop offset="1" stopColor="#a855f7" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g stroke="#d8b4fe" strokeOpacity="0.4" strokeLinecap="round" strokeLinejoin="round">
        {LINES.map((points, i) => (
          <polyline
            key={i}
            points={points.map((p) => p.join(",")).join(" ")}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </g>

      {STARS.map(([x, y, level]) => (
        <g key={`${x},${y}`}>
          <circle cx={x} cy={y} r={GLOW[level]} fill="url(#star-glow)" />
          {level === 3 ? (
            <path
              d={`M${x} ${y - 7}Q${x + 0.8} ${y - 0.8} ${x + 7} ${y}Q${x + 0.8} ${y + 0.8} ${x} ${y + 7}Q${x - 0.8} ${y + 0.8} ${x - 7} ${y}Q${x - 0.8} ${y - 0.8} ${x} ${y - 7}Z`}
              fill="#fff"
            />
          ) : (
            <circle cx={x} cy={y} r={DOT[level]} fill="#fff" />
          )}
        </g>
      ))}
    </svg>
  );
}
