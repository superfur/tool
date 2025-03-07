import map from '../src/map';

describe('map function', () => {
  test('should map array elements using iteratee', () => {
    expect(map([1, 2, 3], (x) => x * 2)).toEqual([2, 4, 6]);
    expect(map(['a', 'b', 'c'], (char) => char.toUpperCase())).toEqual([
      'A',
      'B',
      'C'
    ]);
    expect(map([1, 2, 3], (x) => String(x))).toEqual(['1', '2', '3']);
  });

  test('should provide correct index to iteratee', () => {
    const indices: number[] = [];
    map([10, 20, 30], (_, index) => {
      indices.push(index);
      return index;
    });
    expect(indices).toEqual([0, 1, 2]);
  });

  test('should provide correct array to iteratee', () => {
    const original = [1, 2, 3];
    map(original, (_, __, array) => {
      expect(array).toBe(original);
      return 0;
    });
  });

  test('should handle empty arrays', () => {
    expect(map([], (x) => x)).toEqual([]);
  });

  test('should throw error for non-function iteratees', () => {
    expect(() => {
      // @ts-ignore: Testing invalid input
      map([1, 2, 3], 'not a function');
    }).toThrow(TypeError);

    expect(() => {
      // @ts-ignore: Testing invalid input
      map([1, 2, 3], null);
    }).toThrow(TypeError);
  });

  test('should handle non-array inputs', () => {
    // @ts-ignore: Testing invalid input
    expect(map(null, (x) => x)).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(map(undefined, (x) => x)).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(map('abc', (x) => x)).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(map(123, (x) => x)).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(map({}, (x) => x)).toEqual([]);
  });

  test('should preserve sparse arrays', () => {
    const sparse = [1];
    sparse[2] = 3;
    const result = map(sparse, (x) => x * 2);

    expect(0 in result).toBe(true);
    expect(1 in result).toBe(false);
    expect(2 in result).toBe(true);
    expect(result).toEqual([2, undefined, 6]);
  });
});
