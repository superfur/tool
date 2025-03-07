/**
 * Recursively merges own and inherited enumerable string keyed properties of source objects into the destination object.
 * Source properties that resolve to undefined are skipped if a destination value exists.
 * Array and plain object properties are merged recursively.
 * Other objects and value types are overridden by assignment.
 *
 * @param {Object} object - The destination object
 * @param {...Object} sources - The source objects
 * @returns {Object} Returns the destination object
 * @example
 *
 * const object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * const other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
function merge<T extends object>(object: T, ...sources: any[]): T {
  if (object == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }

  const result = Object(object);

  for (const source of sources) {
    if (source == null) {
      continue;
    }

    mergeObject(result, source);
  }

  return result;
}

/**
 * 递归合并两个对象的属性
 * @param {Object} target - 目标对象
 * @param {Object} source - 源对象
 * @returns {Object} 合并后的对象
 */
function mergeObject(target: any, source: any): any {
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const sourceValue = source[key];
      const targetValue = target[key];

      if (sourceValue === undefined) {
        continue;
      }

      if (targetValue === undefined) {
        target[key] = sourceValue;
        continue;
      }

      if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
        const length = Math.max(targetValue.length, sourceValue.length);
        const mergedArray = [];

        for (let i = 0; i < length; i++) {
          if (
            i < targetValue.length &&
            i < sourceValue.length &&
            isObject(targetValue[i]) &&
            isObject(sourceValue[i])
          ) {
            mergedArray[i] = mergeObject({ ...targetValue[i] }, sourceValue[i]);
          } else {
            mergedArray[i] =
              i < sourceValue.length ? sourceValue[i] : targetValue[i];
          }
        }

        target[key] = mergedArray;
      } else if (isObject(targetValue) && isObject(sourceValue)) {
        target[key] = mergeObject({ ...targetValue }, sourceValue);
      } else {
        target[key] = sourceValue;
      }
    }
  }

  return target;
}

/**
 * 检查值是否为普通对象（非null、非数组）
 * @param {any} value - 要检查的值
 * @returns {boolean} 如果是普通对象则返回true
 */
function isObject(value: any): boolean {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

export default merge;
