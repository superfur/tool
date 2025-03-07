/**
 * Converts string to camel case.
 *
 * @param {string} string - The string to convert
 * @returns {string} Returns the camel cased string
 * @example
 *
 * camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
function camelCase(string: string): string {
  // 参数验证
  if (typeof string !== "string") {
    return "";
  }

  // 将字符串转换为小写，并替换非字母数字字符为空格
  const words = string
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/);

  // 第一个单词保持小写，其余单词首字母大写
  return words
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

export default camelCase;
