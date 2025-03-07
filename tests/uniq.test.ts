import uniq from '../src/uniq';

describe('uniq function', () => {
  test('should remove duplicates from array', () => {
    expect(uniq([2, 1, 2])).toEqual([2, 1]);
    expect(uniq([1, 2, 3, 1, 2, 3])).toEqual([1, 2, 3]);
    expect(uniq(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
  });

  test('should handle arrays with no duplicates', () => {
    expect(uniq([1, 2, 3])).toEqual([1, 2, 3]);
    expect(uniq(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  });

  test('should handle empty arrays', () => {
    expect(uniq([])).toEqual([]);
  });

  test('should handle arrays with different types', () => {
    expect(uniq([1, '1', true, 1, '1', true])).toEqual([1, '1', true]);
    expect(uniq([null, undefined, false, null, undefined])).toEqual([
      null,
      undefined,
      false
    ]);
  });

  test('should handle arrays with objects and arrays', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const arr1 = [1, 2];
    const arr2 = [3, 4];

    // Note: objects and arrays are compared by reference, not by value
    expect(uniq([obj1, obj2, obj1])).toEqual([obj1, obj2]);
    expect(uniq([arr1, arr2, arr1])).toEqual([arr1, arr2]);
  });

  test('should handle non-array inputs', () => {
    // @ts-ignore: Testing invalid input
    expect(uniq(null)).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(uniq(undefined)).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(uniq(123)).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(uniq('abc')).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(uniq({})).toEqual([]);
  });
});
