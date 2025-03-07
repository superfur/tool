/**
 * Creates a throttled function that only invokes func at most once per every wait milliseconds.
 * The throttled function comes with a cancel method to cancel delayed invocations
 * and a flush method to immediately invoke them.
 *
 * @param {Function} func - The function to throttle
 * @param {number} wait - The number of milliseconds to throttle invocations to
 * @param {Object} options - The options object
 * @param {boolean} [options.leading=true] - Specify invoking on the leading edge of the timeout
 * @param {boolean} [options.trailing=true] - Specify invoking on the trailing edge of the timeout
 * @returns {Function} Returns the new throttled function
 * @example
 *
 * // Avoid excessively updating the position while scrolling
 * window.addEventListener('scroll', throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
 * const throttled = throttle(renewToken, 300000, { trailing: false });
 * element.addEventListener('click', throttled);
 */

// Define interface for the returned function, including cancel and flush methods
interface ThrottledFunction<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T> | undefined;
  cancel: () => void;
  flush: () => ReturnType<T> | undefined;
}

function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options: { leading?: boolean; trailing?: boolean } = {}
): ThrottledFunction<T> {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let args: Parameters<T> | null = null;
  let result: ReturnType<T> | undefined;
  let thisArg: any = null;
  let lastCallTime: number | null = null;
  let lastInvokeTime = 0;

  const leading = options.leading !== false;
  const trailing = options.trailing !== false;

  function invokeFunc(time: number): ReturnType<T> {
    const _args = args!;
    const _thisArg = thisArg;

    args = null;
    thisArg = null;
    lastInvokeTime = time;

    return func.apply(_thisArg, _args);
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

  function shouldInvoke(time: number): boolean {
    const timeSinceLastCall = time - (lastCallTime || 0);
    const timeSinceLastInvoke = time - lastInvokeTime;

    return (
      lastCallTime === null ||
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0 ||
      timeSinceLastInvoke >= wait
    );
  }

  function remainingWait(time: number): number {
    var timeSinceLastCall = time - (lastCallTime || 0);
    var timeSinceLastInvoke = time - lastInvokeTime;
    var timeWaiting = wait - timeSinceLastCall;

    return trailing
      ? Math.min(timeWaiting, wait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function trailingEdge(time: number): ReturnType<T> | undefined {
    timeout = null;

    if (trailing && args) {
      return invokeFunc(time);
    }

    args = null;
    thisArg = null;

    return undefined;
  }

  function timerExpired(): void {
    const time = Date.now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }

    timeout = startTimer(timerExpired, remainingWait(time));
  }

  function leadingEdge(time: number): ReturnType<T> | undefined {
    lastInvokeTime = time;

    timeout = startTimer(timerExpired, wait);
    return leading ? invokeFunc(time) : undefined;
  }

  function throttled(
    this: any,
    ...callArgs: Parameters<T>
  ): ReturnType<T> | undefined {
    var time = Date.now();
    var isInvoking = shouldInvoke(time);

    args = callArgs;
    thisArg = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timeout === null) {
        return leadingEdge(lastCallTime);
      }
      if (leading) {
        cancelTimer(timeout);
        timeout = startTimer(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timeout === null) {
      timeout = startTimer(timerExpired, wait);
    }

    return result;
  }

  throttled.cancel = function (): void {
    cancelTimer(timeout);
    lastInvokeTime = 0;
    timeout = null;
    args = null;
    thisArg = null;
    lastCallTime = null;
  };

  throttled.flush = function (): ReturnType<T> | undefined {
    return timeout === null ? result : trailingEdge(Date.now());
  };

  return throttled;
}

export default throttle;
