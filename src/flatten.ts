/**
 * Flattens array a single level deep.
 *
 * @param {Array} array - The array to flatten
 * @returns {Array} Returns the new flattened array
 * @example
 *
 * flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten<T>(array: Array<T | T[]>): T[] {
  // 参数验证
  if (!Array.isArray(array)) {
    return [];
  }

  // 使用reduce和concat扁平化一层
  return array.reduce<T[]>((result, item) => {
    return result.concat(Array.isArray(item) ? item : [item]);
  }, []);
}

export default flatten;
