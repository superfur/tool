/**
 * Deep comparison to check if two values are equal
 *
 * @param {*} value - The first value to compare
 * @param {*} other - The second value to compare
 * @returns {boolean} Returns true if the values are equal, otherwise false
 * @example
 *
 * isEqual([1, 2, 3], [1, 2, 3]);
 * // => true
 *
 * isEqual({ 'a': 1, 'b': 2 }, { 'b': 2, 'a': 1 });
 * // => true
 *
 * isEqual('a', 'a');
 * // => true
 *
 * isEqual('a', Object('a'));
 * // => false
 */
function isEqual(value: any, other: any): boolean {
  if (value === other) {
    return true;
  }

  if (value == null || other == null) {
    return value === other;
  }

  const valueType = typeof value;
  const otherType = typeof other;

  if (valueType !== otherType) {
    return false;
  }

  if (valueType !== "object") {
    return value === other;
  }

  if (value instanceof Date && other instanceof Date) {
    return value.getTime() === other.getTime();
  }

  if (value instanceof RegExp && other instanceof RegExp) {
    return value.toString() === other.toString();
  }

  if (Array.isArray(value) && Array.isArray(other)) {
    if (value.length !== other.length) {
      return false;
    }

    for (let i = 0; i < value.length; i++) {
      if (!isEqual(value[i], other[i])) {
        return false;
      }
    }

    return true;
  }

  if (!Array.isArray(value) && !Array.isArray(other)) {
    const valueKeys = Object.keys(value);
    const otherKeys = Object.keys(other);

    if (valueKeys.length !== otherKeys.length) {
      return false;
    }

    for (const key of valueKeys) {
      if (
        !Object.prototype.hasOwnProperty.call(other, key) ||
        !isEqual(value[key], other[key])
      ) {
        return false;
      }
    }

    return true;
  }

  return false;
}

export default isEqual;
