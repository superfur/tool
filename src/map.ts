/**
 * Creates an array of values by running each element in array through iteratee.
 *
 * @param {Array} array - The array to iterate over
 * @param {Function} iteratee - The function invoked per iteration
 * @returns {Array} Returns the new mapped array
 * @example
 *
 * map([1, 2, 3], x => x * 2);
 * // => [2, 4, 6]
 */
function map<T, U>(
  array: T[],
  iteratee: (value: T, index: number, array: T[]) => U
): U[] {
  // 参数验证
  if (!Array.isArray(array)) {
    return [];
  }

  if (typeof iteratee !== "function") {
    throw new TypeError("iteratee must be a function");
  }

  const length = array.length;
  const result: U[] = new Array(length);

  // 遍历数组并应用迭代函数
  for (let i = 0; i < length; i++) {
    // 只处理数组中实际存在的元素，保留稀疏数组的特性
    if (i in array) {
      result[i] = iteratee(array[i], i, array);
    }
  }

  return result;
}

export default map;
