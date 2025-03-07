/**
 * Creates a new array with all elements that pass the test implemented by the provided function.
 *
 * @param {Array} array - The array to filter
 * @param {Function} predicate - The function invoked per iteration
 * @returns {Array} Returns the new filtered array
 * @example
 *
 * filter([1, 2, 3, 4], n => n % 2 === 0);
 * // => [2, 4]
 */
function filter<T>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => boolean
): T[] {
  // 参数验证
  if (!Array.isArray(array)) {
    return [];
  }

  if (typeof predicate !== "function") {
    throw new TypeError("predicate must be a function");
  }

  const result: T[] = [];

  // 遍历数组并应用断言函数
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
}

export default filter;
