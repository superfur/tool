import has from '../src/has';

describe('has function', () => {
  test('should correctly check direct properties', () => {
    const object = { a: 1, b: 2 };
    expect(has(object, 'a')).toBe(true);
    expect(has(object, 'b')).toBe(true);
    expect(has(object, 'c')).toBe(false);
  });

  test('should correctly check nested properties with dot notation', () => {
    const object = { a: { b: 2 } };
    expect(has(object, 'a')).toBe(true);
    expect(has(object, 'a.b')).toBe(true);
    expect(has(object, 'a.c')).toBe(false);
    expect(has(object, 'b')).toBe(false);
    expect(has(object, 'b.c')).toBe(false);
  });

  test('should correctly check nested properties with array notation', () => {
    const object = { a: { b: 2 } };
    expect(has(object, ['a'])).toBe(true);
    expect(has(object, ['a', 'b'])).toBe(true);
    expect(has(object, ['a', 'c'])).toBe(false);
    expect(has(object, ['b'])).toBe(false);
  });

  test('should correctly check array properties', () => {
    const object = { a: [1, 2, 3] };
    expect(has(object, 'a')).toBe(true);
    expect(has(object, 'a[0]')).toBe(true);
    expect(has(object, 'a[1]')).toBe(true);
    expect(has(object, 'a[3]')).toBe(false);
    expect(has(object, ['a', '0'])).toBe(true);
    expect(has(object, ['a', '3'])).toBe(false);
  });

  test('should correctly handle complex paths', () => {
    const object = { a: [{ b: { c: 3 } }] };
    expect(has(object, 'a[0].b.c')).toBe(true);
    expect(has(object, 'a[0].b.d')).toBe(false);
    expect(has(object, ['a', '0', 'b', 'c'])).toBe(true);
    expect(has(object, ['a', '0', 'b', 'd'])).toBe(false);
  });

  test('should handle edge cases', () => {
    expect(has(null, 'a')).toBe(false);
    expect(has(undefined, 'a')).toBe(false);
    expect(has({}, '')).toBe(false);
    expect(has({}, [])).toBe(true); // Empty path should return true for any object

    const object = { '': 1 };
    expect(has(object, '')).toBe(true);
  });
});
