/**
 * Produces a random number between the inclusive lower and upper bounds.
 * If only one argument is provided, a number between 0 and the given number is returned.
 * If no arguments are provided, a float between 0 and 1 is returned.
 *
 * @param {number} [lower=0] - The lower bound
 * @param {number} [upper=1] - The upper bound
 * @returns {number} Returns the random number
 * @example
 *
 * random(0, 5);
 * // => a number between 0 and 5
 *
 * random(5);
 * // => a number between 0 and 5
 *
 * random();
 * // => a number between 0 and 1
 */
function random(lower: number = 0, upper?: number): number {
  // 如果只提供了一个参数，将其视为上限，下限为0
  if (upper === undefined) {
    upper = lower;
    lower = 0;
  }

  // 如果没有提供参数，返回0到1之间的随机数
  if (lower === 0 && upper === 0) {
    return Math.random();
  }

  // 确保下限小于上限
  if (lower > upper) {
    [lower, upper] = [upper, lower];
  }

  // 生成指定范围内的随机数
  return lower + Math.random() * (upper - lower);
}

export default random;
