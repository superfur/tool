import assign from '../src/assign';

describe('assign function', () => {
  test('should assign properties from source objects to destination object', () => {
    const object = { a: 1 };
    const result = assign(object, { b: 2 }, { c: 3 });

    expect(result).toEqual({ a: 1, b: 2, c: 3 });
    expect(result).toBe(object); // Should modify the original object
  });

  test('should override properties with the same key', () => {
    const object = { a: 1, b: 2 };
    const result = assign(object, { b: 3 }, { b: 4 });

    expect(result).toEqual({ a: 1, b: 4 });
  });

  test('should ignore null and undefined sources', () => {
    const object = { a: 1 };
    const result = assign(object, null, { b: 2 }, undefined);

    expect(result).toEqual({ a: 1, b: 2 });
  });

  test('should handle empty objects', () => {
    const object = {};
    const result = assign(object, { a: 1 });

    expect(result).toEqual({ a: 1 });
  });

  test('should throw error for null or undefined destination', () => {
    expect(() => {
      // @ts-ignore: Testing invalid input
      assign(null, { a: 1 });
    }).toThrow(TypeError);

    expect(() => {
      // @ts-ignore: Testing invalid input
      assign(undefined, { a: 1 });
    }).toThrow(TypeError);
  });

  test('should handle non-object sources', () => {
    const object = { a: 1 };
    // @ts-ignore: Testing invalid input
    const result = assign(object, 'bc', 42);

    // Non-object sources should be converted to objects
    // String 'bc' becomes { 0: 'b', 1: 'c' }
    // Number 42 becomes an empty object {}
    expect(result).toEqual({ a: 1, 0: 'b', 1: 'c' });
  });

  test('should only copy own properties', () => {
    function Source() {
      this.a = 1;
    }
    Source.prototype.b = 2;

    const object = {};
    const source = new Source();

    const result = assign(object, source);

    expect(result).toEqual({ a: 1 }); // Should not copy prototype property 'b'
  });
});
