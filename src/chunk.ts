/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 *
 * @param {Array} array - The array to process
 * @param {number} [size=1] - The length of each chunk
 * @returns {Array} Returns the new array of chunks
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk<T>(array: T[], size: number = 1): T[][] {
  // 参数验证
  if (!Array.isArray(array)) {
    return [];
  }

  // 确保size是正整数
  const chunkSize = Math.max(Math.floor(size), 0);
  const length = array.length;

  // 如果数组为空或size不合法（小于等于0或NaN），返回空数组
  if (!length || chunkSize <= 0 || Number.isNaN(chunkSize)) {
    return [];
  }

  // 计算需要多少个块
  const chunksCount = Math.ceil(length / chunkSize);
  const result: T[][] = new Array(chunksCount);

  // 分割数组
  for (let i = 0; i < chunksCount; i++) {
    const start = i * chunkSize;
    result[i] = array.slice(start, start + chunkSize);
  }

  return result;
}

export default chunk;
