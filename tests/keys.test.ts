import keys from '../src/keys';

describe('keys function', () => {
  test('should correctly get keys of plain objects', () => {
    const object = { a: 1, b: 2, c: 3 };
    expect(keys(object)).toEqual(['a', 'b', 'c']);

    const emptyObject = {};
    expect(keys(emptyObject)).toEqual([]);
  });

  test('should correctly get keys of arrays', () => {
    const array = [1, 2, 3];
    expect(keys(array)).toEqual(['0', '1', '2']);

    const emptyArray = [];
    expect(keys(emptyArray)).toEqual([]);
  });

  test('should correctly get keys of strings', () => {
    expect(keys('abc')).toEqual(['0', '1', '2']);
    expect(keys('')).toEqual([]);
  });

  test('should handle non-object values', () => {
    expect(keys(null)).toEqual([]);
    expect(keys(undefined)).toEqual([]);
    expect(keys(1)).toEqual([]);
    expect(keys(true)).toEqual([]);
    expect(keys(false)).toEqual([]);
  });

  test('should get only own enumerable properties', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;

    const foo = new Foo();
    expect(keys(foo)).toEqual(['a', 'b']); // Should not include 'c' from prototype
  });
});
