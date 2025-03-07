/**
 * Creates an array of the own enumerable property names of object.
 *
 * @param {Object} object - The object to query
 * @returns {Array} Returns the array of property names
 * @example
 *
 * keys({ 'a': 1, 'b': 2 });
 * // => ['a', 'b']
 *
 * keys('hi');
 * // => ['0', '1']
 */
function keys(object: any): string[] {
  // 参数验证
  if (object == null) {
    return [];
  }
  
  // 确保object是一个对象
  const obj = Object(object);
  
  // 获取对象自身的可枚举属性键名
  return Object.keys(obj);
}

export default keys;