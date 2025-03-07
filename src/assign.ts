/**
 * Assigns own enumerable string keyed properties of source objects to the destination object.
 * Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * @param {Object} object - The destination object
 * @param {...Object} sources - The source objects
 * @returns {Object} Returns the destination object
 * @example
 *
 * const object = { a: 1 };
 * assign(object, { b: 2 }, { c: 3 });
 * // => { a: 1, b: 2, c: 3 }
 */
function assign<T extends object, U extends object>(
  object: T,
  ...sources: U[]
): T & U {
  if (object == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }

  const result = Object(object) as T & U;

  for (const source of sources) {
    if (source == null) {
      continue;
    }

    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        (result as any)[key] = (source as any)[key];
      }
    }
  }

  return result;
}

export default assign;
