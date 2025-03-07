import filter from '../src/filter';

describe('filter function', () => {
  test('should filter array elements based on predicate', () => {
    expect(filter([1, 2, 3, 4], (n) => n % 2 === 0)).toEqual([2, 4]);
    expect(filter(['a', 'b', 'c'], (char) => char !== 'b')).toEqual(['a', 'c']);
    expect(filter([true, false, true], Boolean)).toEqual([true, true]);
  });

  test('should provide correct index to predicate', () => {
    const indices: number[] = [];
    filter([10, 20, 30], (_, index) => {
      indices.push(index);
      return true;
    });
    expect(indices).toEqual([0, 1, 2]);
  });

  test('should provide correct array to predicate', () => {
    const original = [1, 2, 3];
    filter(original, (_, __, array) => {
      expect(array).toBe(original);
      return true;
    });
  });

  test('should handle empty arrays', () => {
    expect(filter([], () => true)).toEqual([]);
  });

  test('should throw error for non-function predicates', () => {
    expect(() => {
      // @ts-ignore: Testing invalid input
      filter([1, 2, 3], 'not a function');
    }).toThrow(TypeError);

    expect(() => {
      // @ts-ignore: Testing invalid input
      filter([1, 2, 3], null);
    }).toThrow(TypeError);
  });

  test('should handle non-array inputs', () => {
    // @ts-ignore: Testing invalid input
    expect(filter(null, () => true)).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(filter(undefined, () => true)).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(filter('abc', () => true)).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(filter(123, () => true)).toEqual([]);
    // @ts-ignore: Testing invalid input
    expect(filter({}, () => true)).toEqual([]);
  });
});
