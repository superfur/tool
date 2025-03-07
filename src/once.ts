/**
 * Creates a function that is restricted to be called only once. Repeat calls to the function
 * will return the value of the first call. The function is invoked with the `this` binding
 * and arguments of the created function.
 *
 * @param {Function} func - The function to restrict
 * @returns {Function} Returns the new restricted function
 * @example
 *
 * const initialize = once(createApplication);
 * // => The `initialize` function can only be called once
 * initialize();
 * initialize(); // Subsequent calls return the result of the first call
 */
function once<T extends (...args: any[]) => any>(
  func: T
): (...args: Parameters<T>) => ReturnType<T> {
  // 参数验证
  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }

  // 标记函数是否已被调用
  let called = false;
  // 存储第一次调用的结果
  let result: ReturnType<T>;

  // 返回一个新函数
  return function (this: any, ...args: Parameters<T>): ReturnType<T> {
    if (!called) {
      called = true;
      result = func.apply(this, args);
    }
    return result;
  };
}

export default once;
