export function clamp(num: number, min: number, max: number): number {
  let tempNum = num;

  if (tempNum > max) {
    tempNum = max;
  } else if (tempNum < min) {
    tempNum = min;
  }

  return tempNum;
}
