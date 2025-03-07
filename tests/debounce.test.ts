import debounce from '../src/debounce';

describe('debounce function', () => {
  // 使用假的定时器
  jest.useFakeTimers();

  test('should call the function after the specified wait time', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    expect(func).not.toBeCalled();

    // 快进1000ms
    jest.advanceTimersByTime(1000);
    expect(func).toBeCalled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('multiple calls should only execute once', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    expect(func).not.toBeCalled();

    // 快进1000ms
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('calling during the wait period should reset the timer', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();

    // 快进500ms
    jest.advanceTimersByTime(500);
    expect(func).not.toBeCalled();

    // 再次调用
    debouncedFunc();

    // 再快进500ms（总共1000ms）
    jest.advanceTimersByTime(500);
    expect(func).not.toBeCalled();

    // 再快进500ms（总共1500ms）
    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('leading option should call at the beginning of the delay', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000, { leading: true });

    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1); // 立即调用

    // 快进1000ms
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1); // 不会再次调用
  });

  test('behavior when both leading and trailing options are true', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000, {
      leading: true,
      trailing: true
    });

    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1); // 立即调用

    // 快进500ms后再次调用
    jest.advanceTimersByTime(500);
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1); // 不会立即调用第二次

    // 再快进1000ms
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(2); // trailing调用
  });

  test('should not call after delay when trailing is false', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000, {
      trailing: false,
      leading: true
    });

    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1); // 立即调用

    // 快进1000ms
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1); // 不会在延迟后调用
  });

  test('cancel method should cancel the delayed call', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    debouncedFunc.cancel();

    // 快进1000ms
    jest.advanceTimersByTime(1000);
    expect(func).not.toBeCalled();
  });

  test('flush method should call immediately', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    debouncedFunc.flush();

    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should correctly pass arguments', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc('a', 'b');

    // 快进1000ms
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledWith('a', 'b');
  });

  test('should maintain the correct this context', () => {
    const context = { name: 'test' };
    const func = jest.fn(function (this: { name: string }) {
      return this.name;
    });

    const debouncedFunc = debounce(func, 1000);

    // 使用call绑定this
    debouncedFunc.call(context);

    // 快进1000ms
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func.mock.instances[0]).toBe(context);
  });
});
