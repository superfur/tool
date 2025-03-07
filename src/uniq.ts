/**
 * Creates a duplicate-free version of an array, using SameValueZero for equality comparisons.
 * The first occurrence of each element is kept.
 *
 * @param {Array} array - The array to inspect
 * @returns {Array} Returns the new duplicate-free array
 * @example
 *
 * uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq<T>(array: T[]): T[] {
  // 参数验证
  if (!Array.isArray(array)) {
    return [];
  }

  // 使用Set去重
  return Array.from(new Set(array));
}

export default uniq;
