export type BiriyaniIngredient = 'rice' | 'chicken' | 'sides';
const clamp = (value: number) => Math.min(1, Math.max(0, value));
const easeOut = (value: number) => 1 - Math.pow(1 - value, 3);
const positions = { chicken: [[-15, -15], [15, 14]], sides: [[-23, 35], [23, 35]] } as const;

export function biriyaniPose(progress: number, kind: BiriyaniIngredient, index = 0) {
  const start = kind === 'rice' ? .755 : kind === 'chicken' ? .82 + index * .025 : .905 + index * .018;
  const duration = kind === 'rice' ? .07 : kind === 'chicken' ? .065 : .04;
  const t = clamp((progress - start) / duration);
  const settled = easeOut(t);
  const target = kind === 'rice' ? [0, 0] : positions[kind][index];
  const angle = kind === 'rice' ? 0 : kind === 'chicken' ? [-35, 30][index] : [-6, 6][index];
  return {
    x: target[0] + (kind === 'rice' ? 0 : index === 0 ? -16 : 20) * (1 - settled),
    y: target[1] + (kind === 'rice' ? -22 : kind === 'chicken' ? -60 : 16) * (1 - settled),
    rotate: angle + (index === 0 ? -24 : 35) * (1 - settled),
    scale: 1 + (kind === 'rice' ? -.22 : kind === 'sides' ? -.12 : .18) * (1 - settled),
    opacity: clamp(t / .22),
  };
}
// Explicit beats prevent an eased sweep from rushing through the final ingredients.
export const BIRIYANI_BUILD_VALUES = [.65, .755, .755, .825, .825, .885, .885, .91, .91, .945, .945, .975, .98, .98];
export const BIRIYANI_BUILD_SECONDS = [0, 1.1, 1.6, 3.2, 3.6, 5.2, 5.6, 6.7, 7.1, 8.3, 8.7, 9.8, 10.2, 14];
export const BIRIYANI_BUILD_DURATION = 14;
export const BIRIYANI_BUILD_TIMES = BIRIYANI_BUILD_SECONDS.map(second => second / BIRIYANI_BUILD_DURATION);
export const FOOD_TOUR_VALUES = [.11, .11, .38, .56, .58, ...BIRIYANI_BUILD_VALUES];
export const FOOD_TOUR_DURATION = 28.8;
export const FOOD_TOUR_TIMES = [0, 3, 6.5, 11, 14, ...BIRIYANI_BUILD_SECONDS.map(second => second + 14.8)].map(second => second / FOOD_TOUR_DURATION);