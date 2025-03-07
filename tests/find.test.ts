import find from '../src/find';

describe('find function', () => {
  test('should find the first element that passes the predicate', () => {
    const users = [
      { user: 'barney', age: 36, active: true },
      { user: 'fred', age: 40, active: false },
      { user: 'pebbles', age: 1, active: true }
    ];

    expect(find(users, (o) => o.age < 40)).toEqual({
      user: 'barney',
      age: 36,
      active: true
    });
    expect(find(users, (o) => o.active === false)).toEqual({
      user: 'fred',
      age: 40,
      active: false
    });
    expect(find([1, 2, 3, 4], (n) => n % 2 === 0)).toBe(2);
  });

  test('should work with fromIndex', () => {
    const array = [1, 2, 3, 4, 5];

    expect(find(array, (n) => n > 2, 0)).toBe(3);
    expect(find(array, (n) => n > 2, 2)).toBe(3);
    expect(find(array, (n) => n > 2, 3)).toBe(4);

    // Negative fromIndex
    expect(find(array, (n) => n > 3, -2)).toBe(4); // Starts from array[3]
  });

  test('should return undefined if no element passes the predicate', () => {
    expect(find([1, 2, 3], (n) => n > 5)).toBeUndefined();
    expect(find([], () => true)).toBeUndefined();
  });

  test('should provide correct index to predicate', () => {
    const indices: number[] = [];
    find([10, 20, 30], (_, index) => {
      indices.push(index);
      return false;
    });
    expect(indices).toEqual([0, 1, 2]);
  });

  test('should provide correct array to predicate', () => {
    const original = [1, 2, 3];
    find(original, (_, __, array) => {
      expect(array).toBe(original);
      return false;
    });
  });

  test('should throw error for non-function predicates', () => {
    expect(() => {
      // @ts-ignore: Testing invalid input
      find([1, 2, 3], 'not a function');
    }).toThrow(TypeError);

    expect(() => {
      // @ts-ignore: Testing invalid input
      find([1, 2, 3], null);
    }).toThrow(TypeError);
  });

  test('should handle non-array inputs', () => {
    // @ts-ignore: Testing invalid input
    expect(find(null, () => true)).toBeUndefined();
    // @ts-ignore: Testing invalid input
    expect(find(undefined, () => true)).toBeUndefined();
    // @ts-ignore: Testing invalid input
    expect(find('abc', () => true)).toBeUndefined();
    // @ts-ignore: Testing invalid input
    expect(find(123, () => true)).toBeUndefined();
    // @ts-ignore: Testing invalid input
    expect(find({}, () => true)).toBeUndefined();
  });

  test('should handle fromIndex greater than array length', () => {
    expect(find([1, 2, 3], (n) => n > 0, 5)).toBeUndefined();
  });
});
