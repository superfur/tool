import throttle from '../src/throttle';

describe('throttle function', () => {
  // Mock timers
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should throttle function calls', () => {
    const func = jest.fn();
    const throttled = throttle(func, 100);

    throttled();
    expect(func).toHaveBeenCalledTimes(1); // Leading call

    // Call again immediately
    throttled();
    expect(func).toHaveBeenCalledTimes(1); // Should not call again

    // Advance time by 50ms
    jest.advanceTimersByTime(50);
    throttled();
    expect(func).toHaveBeenCalledTimes(1); // Still throttled

    // Advance time by another 50ms (total 100ms)
    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(2); // Trailing call

    // Advance time by another 100ms
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2); // No more calls
  });

  test('should pass arguments to the throttled function', () => {
    const func = jest.fn();
    const throttled = throttle(func, 100);

    throttled('a', 'b');
    expect(func).toHaveBeenCalledWith('a', 'b');

    throttled('c', 'd');
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith('c', 'd');
  });

  test('should preserve this context', () => {
    const obj = {
      value: 0,
      update: function (val: number) {
        this.value = val;
      }
    };

    obj.throttledUpdate = throttle(obj.update, 100);

    obj.throttledUpdate(1);
    expect(obj.value).toBe(1);

    obj.throttledUpdate(2);
    jest.advanceTimersByTime(100);
    expect(obj.value).toBe(2);
  });

  test('should support leading=false option', () => {
    const func = jest.fn();
    const throttled = throttle(func, 100, { leading: false });

    throttled();
    expect(func).not.toHaveBeenCalled(); // No leading call

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1); // Trailing call
  });

  test('should support trailing=false option', () => {
    const func = jest.fn();
    const throttled = throttle(func, 100, { trailing: false });

    throttled();
    expect(func).toHaveBeenCalledTimes(1); // Leading call

    throttled();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1); // No trailing call
  });

  test('should support both leading=false and trailing=false', () => {
    const func = jest.fn();
    const throttled = throttle(func, 100, { leading: false, trailing: false });

    throttled();
    expect(func).not.toHaveBeenCalled(); // No leading call

    jest.advanceTimersByTime(100);
    expect(func).not.toHaveBeenCalled(); // No trailing call

    // After wait time, next call should work
    throttled();
    expect(func).not.toHaveBeenCalled(); // Still no call due to leading: false

    jest.advanceTimersByTime(100);
    expect(func).not.toHaveBeenCalled(); // Still no call due to trailing: false
  });

  test('should support cancel method', () => {
    const func = jest.fn();
    const throttled = throttle(func, 100);

    throttled();
    expect(func).toHaveBeenCalledTimes(1);

    throttled();
    throttled.cancel();

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1); // No trailing call after cancel
  });

  test('should support flush method', () => {
    const func = jest.fn();
    const throttled = throttle(func, 100);

    throttled();
    expect(func).toHaveBeenCalledTimes(1);

    throttled();
    throttled.flush();
    expect(func).toHaveBeenCalledTimes(2); // Immediate trailing call

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2); // No more calls
  });
});
