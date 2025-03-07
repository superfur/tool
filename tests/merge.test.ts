import merge from '../src/merge';

describe('merge function', () => {
  test('should merge properties from source objects to destination object', () => {
    const object = { a: 1 };
    const result = merge(object, { b: 2 }, { c: 3 });

    expect(result).toEqual({ a: 1, b: 2, c: 3 });
    expect(result).toBe(object); // Should modify the original object
  });

  test('should recursively merge objects', () => {
    const object = { a: { b: 1 } };
    const result = merge(object, { a: { c: 2 } });

    expect(result).toEqual({ a: { b: 1, c: 2 } });
  });

  test('should merge arrays by index', () => {
    const object = { a: [{ b: 2 }, { d: 4 }] };
    const other = { a: [{ c: 3 }, { e: 5 }] };

    const result = merge(object, other);

    expect(result).toEqual({
      a: [
        { b: 2, c: 3 },
        { d: 4, e: 5 }
      ]
    });
  });

  test('should handle arrays with different lengths', () => {
    const object = { a: [1, 2] };
    const other = { a: [3, 4, 5] };

    const result = merge(object, other);

    expect(result).toEqual({ a: [3, 4, 5] });
  });

  test('should override non-object values', () => {
    const object = { a: 1, b: 'string', c: true };
    const result = merge(object, { a: 2, b: 'new', c: false });

    expect(result).toEqual({ a: 2, b: 'new', c: false });
  });

  test('should ignore undefined source values', () => {
    const object = { a: 1 };
    const result = merge(object, { a: undefined, b: 2 });

    expect(result).toEqual({ a: 1, b: 2 });
  });

  test('should ignore null and undefined sources', () => {
    const object = { a: 1 };
    const result = merge(object, null, { b: 2 }, undefined);

    expect(result).toEqual({ a: 1, b: 2 });
  });

  test('should throw error for null or undefined destination', () => {
    expect(() => {
      // @ts-ignore: Testing invalid input
      merge(null, { a: 1 });
    }).toThrow(TypeError);

    expect(() => {
      // @ts-ignore: Testing invalid input
      merge(undefined, { a: 1 });
    }).toThrow(TypeError);
  });

  test('should handle complex nested structures', () => {
    const object = {
      a: { b: { c: 1 } },
      d: [1, { e: 2 }],
      f: 3
    };

    const source = {
      a: { b: { d: 2 }, g: 3 },
      d: [4, { h: 5 }, 6],
      i: 7
    };

    const result = merge(object, source);

    expect(result).toEqual({
      a: { b: { c: 1, d: 2 }, g: 3 },
      d: [4, { e: 2, h: 5 }, 6],
      f: 3,
      i: 7
    });
  });
});
