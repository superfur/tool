/**
 * Creates an array with all falsey values removed.
 * The values false, null, 0, "", undefined, and NaN are falsey.
 *
 * @param {Array} array - The array to compact
 * @returns {Array} Returns the new array of filtered values
 * @example
 *
 * compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact<T>(array: T[]): T[] {
  // 参数验证
  if (!Array.isArray(array)) {
    return [];
  }

  // 过滤掉所有假值
  return array.filter(Boolean);
}

export default compact;
