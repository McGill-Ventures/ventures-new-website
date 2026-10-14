/** Wraps a photo's `sizes` so 3x screens (phones) fetch what a 2x screen would.
 *  A 3x photo costs 2.25x the bytes of a 2x one for detail nobody sees at arm's length. */
export function at2x(sizes: string) {
  const entries = sizes.split(",");
  // A comma inside min(), max() or clamp() would split one entry in two.
  if (entries.some((entry) => entry.split("(").length !== entry.split(")").length)) {
    throw new Error(`at2x cannot wrap "${sizes}": a function in it contains a comma`);
  }
  return entries
    .flatMap((entry) => {
      const [, condition, length] = entry.trim().match(/^(?:(\(.*\))\s+)?(.+)$/)!;
      const on3x = condition ? `${condition} and (min-resolution: 3dppx)` : "(min-resolution: 3dppx)";
      return [`${on3x} calc(${length} * 2 / 3)`, entry.trim()];
    })
    .join(", ");
}
