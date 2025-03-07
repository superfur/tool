import compact from '../src/compact';

describe('compact function', () => {
  test('should remove all falsey values from array', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
    expect(compact([null, 1, undefined, 2, NaN, 3])).toEqual([1, 2, 3]);
  });

  test('should return empty array for array with only falsey values', () => {
    expect(compact([0, false, '', null, undefined, NaN])).toEqual([]);
  });

  test('should return same array for array with only truthy values', () => {
    expect(compact([1, 2, 3, 'a', true, {}])).toEqual([1, 2, 3, 'a', true, {}]);
  });

  test('should return empty array for empty array', () => {
    expect(compact([])).toEqual([]);
  });

  test('should handle non-array inputs', () => {
    // @ts-ignore: Testing invalid input
    expect(compact(null)).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(compact(undefined)).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(compact('abc')).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(compact(123)).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(compact({})).toEqual([]);
  });

  test('should handle arrays with nested arrays and objects', () => {
    const arr = [0, [1, 2], false, { a: 1 }, '', []];
    expect(compact(arr)).toEqual([[1, 2], { a: 1 }, []]);
  });
});
