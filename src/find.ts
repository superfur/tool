/**
 * Iterates over elements of array, returning the first element predicate returns truthy for.
 *
 * @param {Array} array - The array to inspect
 * @param {Function} predicate - The function invoked per iteration
 * @param {number} [fromIndex=0] - The index to search from
 * @returns {*} Returns the matched element, else undefined
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * find(users, o => o.age < 40);
 * // => { 'user': 'barney', 'age': 36, 'active': true }
 */
function find<T>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => boolean,
  fromIndex: number = 0
): T | undefined {
  // 参数验证
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (typeof predicate !== "function") {
    throw new TypeError("predicate must be a function");
  }

  const length = array.length;

  // 确保fromIndex是有效的
  let index = fromIndex >= 0 ? fromIndex : Math.max(length + fromIndex, 0);

  // 遍历数组并应用断言函数
  for (; index < length; index++) {
    if (predicate(array[index], index, array)) {
      return array[index];
    }
  }

  return undefined;
}

export default find;
