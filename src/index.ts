/**
 * Estimates a one-repetition maximum using Brzycki's formula.
 *
 * @param weight The weight lifted.
 * @param reps The number of repetitions performed with `weight`.
 * @returns The estimated one-repetition maximum, in the same unit as `weight`.
 *
 * @example
 * ```ts
 * brzycki(100, 6);
 * // => 116.12903225806451
 * ```
 */
export function brzycki(weight: number, reps: number): number {
  return (weight * 36) / (37 - reps);
}
