import once from '../src/once';

describe('once function', () => {
  test('should only execute the function once', () => {
    let count = 0;
    const increment = () => {
      count++;
      return count;
    };

    const onceIncrement = once(increment);

    expect(onceIncrement()).toBe(1); // First call
    expect(onceIncrement()).toBe(1); // Second call should return the same result
    expect(onceIncrement()).toBe(1); // Third call should return the same result

    expect(count).toBe(1); // The original function should only be called once
  });

  test('should preserve the return value of the first call', () => {
    const getObject = () => ({ value: Math.random() });
    const onceGetObject = once(getObject);

    const result1 = onceGetObject();
    const result2 = onceGetObject();

    expect(result2).toBe(result1); // Should return the same object reference
  });

  test('should preserve the this context', () => {
    const obj = {
      value: 0,
      increment: function () {
        this.value++;
        return this.value;
      }
    };

    obj.onceIncrement = once(obj.increment);

    expect(obj.onceIncrement()).toBe(1); // First call
    expect(obj.onceIncrement()).toBe(1); // Second call should return the same result
    expect(obj.value).toBe(1); // The value should only be incremented once
  });

  test('should pass arguments to the original function', () => {
    const add = (a: number, b: number) => a + b;
    const onceAdd = once(add);

    expect(onceAdd(1, 2)).toBe(3); // First call with arguments 1 and 2
    expect(onceAdd(3, 4)).toBe(3); // Second call with different arguments should still return the result of the first call
  });

  test('should throw error for non-function inputs', () => {
    expect(() => {
      // @ts-ignore: Testing invalid input
      once(null);
    }).toThrow(TypeError);

    expect(() => {
      // @ts-ignore: Testing invalid input
      once(undefined);
    }).toThrow(TypeError);

    expect(() => {
      // @ts-ignore: Testing invalid input
      once('not a function');
    }).toThrow(TypeError);
  });
});
