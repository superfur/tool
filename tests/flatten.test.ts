import flatten from '../src/flatten';

describe('flatten function', () => {
  test('should flatten array a single level deep', () => {
    expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5]);
    expect(flatten([[1, 2], [3, 4], 5])).toEqual([1, 2, 3, 4, 5]);
    expect(flatten([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle empty arrays', () => {
    expect(flatten([])).toEqual([]);
    expect(flatten([[], [], []])).toEqual([]);
    expect(flatten([1, [], 2, [], 3])).toEqual([1, 2, 3]);
  });

  test('should handle nested empty arrays', () => {
    expect(flatten([[], [[]], [[], []]])).toEqual([[], [], []]);
  });

  test('should handle arrays with different types', () => {
    expect(flatten([1, ['a', 'b'], { c: 3 }, [true, false]])).toEqual([
      1,
      'a',
      'b',
      { c: 3 },
      true,
      false
    ]);
  });

  test('should handle non-array inputs', () => {
    // @ts-ignore: Testing invalid input
    expect(flatten(null)).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(flatten(undefined)).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(flatten('abc')).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(flatten(123)).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(flatten({})).toEqual([]);
  });
});
