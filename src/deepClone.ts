/**
 * Deep clone a value
 *
 * @param {*} value - The value to clone
 * @returns {*} The cloned value
 * @example
 *
 * const objects = [{ 'a': 1 }, { 'b': 2 }];
 * const deep = deepClone(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 *
 * const obj = { a: 1, b: { c: 2 } };
 * const clone = deepClone(obj);
 * obj.b.c = 3;
 * console.log(clone.b.c);
 * // => 2
 */
function deepClone<T>(value: T): T {
  if (value == null) {
    return value;
  }

  if (value instanceof Date) {
    return new Date(value.getTime()) as unknown as T;
  }

  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags) as unknown as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item)) as unknown as T;
  }

  if (typeof value === "object") {
    const result = {} as Record<string, any>;
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        result[key] = deepClone((value as Record<string, any>)[key]);
      }
    }
    return result as unknown as T;
  }

  return value;
}

export default deepClone;
