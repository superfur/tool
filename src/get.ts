/**
 * Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned.
 *
 * @param {Object} object - The object to query
 * @param {string|Array} path - The path of the property to get
 * @param {*} [defaultValue] - The value returned for undefined resolved values
 * @returns {*} Returns the resolved value
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * get(object, 'a[0].b.c');
 * // => 3
 *
 * get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object: any, path: string | string[], defaultValue?: any): any {
  if (object == null) {
    return defaultValue;
  }

  // 处理空路径的特殊情况
  if (path === '') {
    // 如果对象有空字符串键，返回该键的值
    if (object.hasOwnProperty('')) {
      return object[''];
    }
    return undefined;
  }
  
  // 处理空数组路径的情况
  if (Array.isArray(path) && path.length === 0) {
    return undefined;
  }

  const keys = Array.isArray(path) ? path : parsePath(path);
  let result = object;

  for (let i = 0; i < keys.length; i++) {
    if (result == null) {
      return defaultValue;
    }
    result = result[keys[i]];
  }

  return result === undefined ? defaultValue : result;
}

/**
 * 将字符串路径解析为路径数组
 * @param {string} path - 要解析的路径字符串
 * @returns {string[]} 路径数组
 */
function parsePath(path: string): string[] {
  const pathArray: string[] = [];
  const pathRegex = /\[([^\[\]]*)]|([^\[\].]+)/g;
  let match;

  while ((match = pathRegex.exec(path)) !== null) {
    pathArray.push(match[1] || match[2]);
  }

  return pathArray;
}

export default get;
