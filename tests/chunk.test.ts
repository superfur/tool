import chunk from '../src/chunk';

describe('chunk function', () => {
  test('should split array into chunks of specified size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([
      ['a', 'b'],
      ['c', 'd']
    ]);
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
    expect(chunk(['a', 'b', 'c', 'd'], 1)).toEqual([
      ['a'],
      ['b'],
      ['c'],
      ['d']
    ]);
    expect(chunk(['a', 'b', 'c', 'd'], 4)).toEqual([['a', 'b', 'c', 'd']]);
  });

  test('should handle size larger than array length', () => {
    expect(chunk(['a', 'b', 'c'], 5)).toEqual([['a', 'b', 'c']]);
  });

  test('should use default size of 1', () => {
    expect(chunk(['a', 'b', 'c'])).toEqual([['a'], ['b'], ['c']]);
  });

  test('should handle edge cases', () => {
    expect(chunk([], 2)).toEqual([]);
    expect(chunk(['a', 'b'], 0)).toEqual([]);
    expect(chunk(['a', 'b'], -1)).toEqual([]);
    expect(chunk(['a', 'b'], NaN)).toEqual([]);
  });

  test('should handle non-array inputs', () => {
    // @ts-ignore: Testing invalid input
    expect(chunk(null, 2)).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(chunk(undefined, 2)).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(chunk('abc', 2)).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(chunk(123, 2)).toEqual([]);
  });

  test('should handle decimal sizes by flooring them', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2.7)).toEqual([
      ['a', 'b'],
      ['c', 'd']
    ]);
    expect(chunk(['a', 'b', 'c', 'd'], 1.1)).toEqual([
      ['a'],
      ['b'],
      ['c'],
      ['d']
    ]);
  });
});
