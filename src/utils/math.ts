/**
 * Limits a value between a range.
 * @param value The value to clamp.
 * @param min Clamps the value to min if set.
 * @param max Clamps the value to max if set.
 */
export const clamp = (value: number, min?: number, max?: number) => {
  if (min !== undefined && value < min) {
    value = min;
  }
  if (max !== undefined && value > max) {
    value = max;
  }
  return value;
};
