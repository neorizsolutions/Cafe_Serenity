export type VadaPose = { x: number; y: number; rotate: number; scale: number; opacity: number };
type Point = readonly [number, number];

// Percentages refer to the shared square food stage, not the image itself.
export const VADA_PLACEMENTS: readonly Point[] = [[-19, -15], [19, -10], [0, 21]];
const exits: readonly Point[] = [[-54, -53], [64, -36], [22, 73]];
const exitBends: readonly Point[] = [[-46, -10], [42, 18], [-18, 50]];
const restingAngles = [-18, 15, -6];
const clamp = (value: number) => Math.min(1, Math.max(0, value));
const ease = (value: number) => value * value * (3 - 2 * value);
const mix = (from: number, to: number, t: number) => from + (to - from) * t;
function curve(from: Point, bend: Point, to: Point, t: number): Point {
  const u = 1 - t;
  return [u * u * from[0] + 2 * u * t * bend[0] + t * t * to[0], u * u * from[1] + 2 * u * t * bend[1] + t * t * to[1]];
}

export function vadaPose(progress: number, index: number): VadaPose {
  // Bottom piece leaves first; then the right, then the left. Each keeps its own lane.
  const departureStart = .19 + (2 - index) * .018;
  const departure = clamp((progress - departureStart) / .13);
  const leaving = curve(VADA_PLACEMENTS[index], exitBends[index], exits[index], ease(departure));
  const [x, y] = leaving;
  return {
    x, y,
    rotate: mix(restingAngles[index], restingAngles[index] + (index === 1 ? 75 : -65), ease(departure)),
    scale: mix(1, .7, ease(departure)),
    opacity: 1 - clamp((departure - .65) / .35),
  };
}