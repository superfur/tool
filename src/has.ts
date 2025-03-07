/**
 * Checks if path is a direct property of object.
 *
 * @param {Object} object - The object to query
 * @param {string|Array} path - The path to check
 * @returns {boolean} Returns true if path exists, else false
 * @example
 *
 * const object = { 'a': { 'b': 2 } };
 *
 * has(object, 'a');
 * // => true
 *
 * has(object, 'a.b');
 * // => true
 *
 * has(object, ['a', 'b']);
 * // => true
 *
 * has(object, 'c');
 * // => false
 */
function has(object: any, path: string | string[]): boolean {
  // 参数验证
  if (object == null) {
    return false;
  }

  // 处理空路径的特殊情况
  if (path === '') {
    // 检查对象是否有空字符串键
    return Object.prototype.hasOwnProperty.call(object, '');
  }
  
  // 空数组路径对任何对象都返回 true
  if (Array.isArray(path) && path.length === 0) {
    return true;
  }

  // 将路径转换为数组
  const keys = Array.isArray(path) ? path : parsePath(path);
  let current = object;

  // 遍历路径
  for (let i = 0; i < keys.length; i++) {
    // 如果当前对象不是对象或当前键不存在，返回false
    if (
      current == null ||
      !Object.prototype.hasOwnProperty.call(current, keys[i])
    ) {
      return false;
    }
    current = current[keys[i]];
  }

  return true;
}

/**
 * 将字符串路径解析为路径数组
 * @param {string} path - 要解析的路径字符串
 * @returns {string[]} 路径数组
 */
function parsePath(path: string): string[] {
  // 匹配属性名称，包括括号表示法
  const pathArray: string[] = [];
  const pathRegex = /\[([^\[\]]*)]|([^\[\].]+)/g;
  let match;

  while ((match = pathRegex.exec(path)) !== null) {
    pathArray.push(match[1] || match[2]);
  }

  return pathArray;
}

export default has;
