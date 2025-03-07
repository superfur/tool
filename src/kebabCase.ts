/**
 * Converts string to kebab case.
 *
 * @param {string} string - The string to convert
 * @returns {string} Returns the kebab cased string
 * @example
 *
 * kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
function kebabCase(string: string): string {
  // 参数验证
  if (typeof string !== "string") {
    return "";
  }

  // 将驼峰式命名转换为短横线分隔（先处理驼峰，再转小写）
  let result = string.replace(/([a-z0-9])([A-Z])/g, '$1-$2');
  
  // 将字符串转换为小写
  result = result.toLowerCase();
  
  // 替换非字母数字字符为短横线
  result = result.replace(/[^a-z0-9]+/g, '-');
  
  // 移除开头和结尾的短横线
  result = result.replace(/^-+|-+$/g, '');
  
  return result;
}

export default kebabCase;
