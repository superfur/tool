import reduce from '../src/reduce';

describe('reduce function', () => {
  test('should reduce array elements using iteratee', () => {
    expect(reduce([1, 2, 3, 4], (sum, n) => sum + n, 0)).toBe(10);
    expect(reduce(['a', 'b', 'c'], (result, char) => result + char, '')).toBe(
      'abc'
    );
    expect(reduce([1, 2, 3], (product, n) => product * n, 1)).toBe(6);
  });

  test('should use first element as initial value if not provided', () => {
    expect(reduce([1, 2, 3, 4], (sum, n) => sum + n)).toBe(10);
    expect(reduce(['a', 'b', 'c'], (result, char) => result + char)).toBe(
      'abc'
    );
  });

  test('should provide correct index to iteratee', () => {
    const indices: number[] = [];
    reduce(
      [10, 20, 30],
      (acc, _, index) => {
        indices.push(index);
        return acc;
      },
      0
    );
    expect(indices).toEqual([0, 1, 2]);

    // When no initial value is provided, iteration starts from index 1
    const indicesNoInit: number[] = [];
    reduce([10, 20, 30], (acc, _, index) => {
      indicesNoInit.push(index);
      return acc;
    });
    expect(indicesNoInit).toEqual([1, 2]);
  });

  test('should provide correct array to iteratee', () => {
    const original = [1, 2, 3];
    reduce(
      original,
      (acc, _, __, array) => {
        expect(array).toBe(original);
        return acc;
      },
      0
    );
  });

  test('should throw error for empty array with no initial value', () => {
    expect(() => {
      reduce([], (acc, val) => acc + val);
    }).toThrow(TypeError);
  });

  test('should throw error for non-function iteratees', () => {
    expect(() => {
      // @ts-ignore: Testing invalid input
      reduce([1, 2, 3], 'not a function', 0);
    }).toThrow(TypeError);

    expect(() => {
      // @ts-ignore: Testing invalid input
      reduce([1, 2, 3], null, 0);
    }).toThrow(TypeError);
  });

  test('should handle non-array inputs', () => {
    // @ts-ignore: Testing invalid input
    expect(reduce(null, (acc, val) => acc + val, 0)).toBe(0);
    // @ts-ignore: Testing invalid input
    expect(reduce(undefined, (acc, val) => acc + val, 'default')).toBe(
      'default'
    );
    // @ts-ignore: Testing invalid input
    expect(reduce('abc', (acc, val) => acc + val, 0)).toBe(0);
    // @ts-ignore: Testing invalid input
    expect(reduce(123, (acc, val) => acc + val, [])).toEqual([]);
  });

  test('should handle complex accumulator types', () => {
    const result = reduce(
      [1, 2, 3],
      (acc, val) => {
        acc[val] = val * 2;
        return acc;
      },
      {} as Record<number, number>
    );

    expect(result).toEqual({ 1: 2, 2: 4, 3: 6 });
  });
});
