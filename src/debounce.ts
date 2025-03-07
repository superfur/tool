/**
 * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked
 *
 * @param {Function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @param {Object} options - The options object
 * @param {boolean} [options.leading=false] - Specify invoking on the leading edge of the timeout
 * @param {boolean} [options.trailing=true] - Specify invoking on the trailing edge of the timeout
 * @returns {Function} Returns the new debounced function
 * @example
 *
 * // Avoid updating layout during window resize too frequently
 * window.addEventListener('resize', debounce(calculateLayout, 150));
 *
 * // Send request only after user stops typing
 * element.addEventListener('input', debounce(sendRequest, 300));
 */
interface DebouncedFunction<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): void;
  cancel: () => void;
  flush: () => ReturnType<T> | undefined;
}

function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options: { leading?: boolean; trailing?: boolean } = {}
): DebouncedFunction<T> {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | null = null;
  let lastThis: any = null;
  let result: ReturnType<T> | undefined;
  let lastCallTime: number | null = null;

  const leading = options.leading === undefined ? false : !!options.leading;
  const trailing = options.trailing === undefined ? true : !!options.trailing;

  function invokeFunc(time: number): ReturnType<T> {
    const args = lastArgs!;
    const thisArg = lastThis;

    lastArgs = null;
    lastThis = null;
    lastCallTime = time;

    return func.apply(thisArg, args);
  }

  function startTimer(
    pendingFunc: () => void,
    wait: number
  ): ReturnType<typeof setTimeout> {
    return setTimeout(pendingFunc, wait);
  }

  function cancelTimer(id: ReturnType<typeof setTimeout> | null): void {
    if (id !== null) {
      clearTimeout(id);
    }
  }

  function trailingEdge(time: number): ReturnType<T> | undefined {
    timeout = null;

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = null;
    lastThis = null;

    return undefined;
  }

  function leadingEdge(time: number): ReturnType<T> | undefined {
    lastCallTime = time;
    timeout = startTimer(() => trailingEdge(Date.now()), wait);

    if (leading) {
      return invokeFunc(time);
    }

    return undefined;
  }

  function debounced(this: any, ...args: Parameters<T>): void {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    lastThis = this;

    if (isInvoking) {
      if (timeout === null) {
        return leadingEdge(time);
      }

      if (leading) {
        timeout = startTimer(() => trailingEdge(Date.now()), wait);
        return invokeFunc(time);
      }
    }

    if (timeout === null) {
      timeout = startTimer(() => trailingEdge(Date.now()), wait);
    } else {
      cancelTimer(timeout);
      timeout = startTimer(() => trailingEdge(Date.now()), wait);
    }
  }

  function shouldInvoke(time: number): boolean {
    if (lastCallTime === null) {
      return true;
    }

    const timeSinceLastCall = time - lastCallTime;
    return timeSinceLastCall >= wait;
  }

  function cancel(): void {
    cancelTimer(timeout);
    timeout = null;
    lastArgs = null;
    lastThis = null;
  }

  function flush(): ReturnType<T> | undefined {
    if (timeout !== null) {
      const result = trailingEdge(Date.now());
      return result;
    }
    return undefined;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;

  return debounced as unknown as DebouncedFunction<T>;
}

export default debounce;
