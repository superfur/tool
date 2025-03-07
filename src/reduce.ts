/**
 * Reduces array to a value which is the accumulated result of running each element
 * through iteratee, where each successive invocation is supplied the return value of the previous.
 *
 * @param {Array} array - The array to iterate over
 * @param {Function} iteratee - The function invoked per iteration
 * @param {*} [accumulator] - The initial value
 * @returns {*} Returns the accumulated value
 * @example
 *
 * reduce([1, 2, 3], (sum, n) => sum + n, 0);
 * // => 6
 *
 * reduce({ 'a': 1, 'b': 2, 'c': 3 }, (result, value, key) => {
 *   result[key] = value * 2;
 *   return result;
 * }, {});
 * // => { 'a': 2, 'b': 4, 'c': 6 }
 */
function reduce<T, U>(
  array: T[],
  iteratee: (accumulator: U, value: T, index: number, array: T[]) => U,
  accumulator?: U
): U {
  // 参数验证
  if (!Array.isArray(array)) {
    return accumulator as U;
  }

  if (typeof iteratee !== "function") {
    throw new TypeError("iteratee must be a function");
  }

  const length = array.length;
  let index = 0;
  let acc: U;

  // 如果没有提供初始值，使用数组的第一个元素
  if (accumulator === undefined) {
    if (length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    acc = array[0] as unknown as U;
    index = 1;
  } else {
    acc = accumulator;
  }

  // 遍历数组并应用迭代函数
  for (; index < length; index++) {
    acc = iteratee(acc, array[index], index, array);
  }

  return acc;
}

export default reduce;
