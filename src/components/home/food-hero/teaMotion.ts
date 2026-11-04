const clamp = (value: number) => Math.min(1, Math.max(0, value));
const smooth = (value: number) => value * value * (3 - 2 * value);

export function teaPourPose(progress: number) {
  const fill = smooth(clamp((progress - .395) / .155));
  const stream = smooth(clamp((progress - .37) / .025)) * (1 - smooth(clamp((progress - .535) / .025)));
  return {
    fill,
    // Coordinates inside the square food stage. Full glass is aligned to the artwork below.
    surfaceY: 8 + 89.8 * (.82 - .60 * fill),
    surfaceWidth: 29 + 14 * fill,
    revealTop: 82 - 60 * fill,
    stream,
    ripple: stream * (.65 + .25 * Math.sin(progress * 180)),
    steam: smooth(clamp((progress - .55) / .035)) * (1 - smooth(clamp((progress - .64) / .075))),
  };
}