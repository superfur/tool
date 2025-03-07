import get from '../src/get';

describe('get function', () => {
  test('should correctly get direct properties', () => {
    const object = { a: 1, b: 2 };
    expect(get(object, 'a')).toBe(1);
    expect(get(object, 'b')).toBe(2);
    expect(get(object, 'c')).toBe(undefined);
    expect(get(object, 'c', 'default')).toBe('default');
  });

  test('should correctly get nested properties with dot notation', () => {
    const object = { a: { b: 2 } };
    expect(get(object, 'a')).toEqual({ b: 2 });
    expect(get(object, 'a.b')).toBe(2);
    expect(get(object, 'a.c')).toBe(undefined);
    expect(get(object, 'a.c', 'default')).toBe('default');
    expect(get(object, 'b')).toBe(undefined);
    expect(get(object, 'b.c', 'default')).toBe('default');
  });

  test('should correctly get nested properties with array notation', () => {
    const object = { a: { b: 2 } };
    expect(get(object, ['a'])).toEqual({ b: 2 });
    expect(get(object, ['a', 'b'])).toBe(2);
    expect(get(object, ['a', 'c'])).toBe(undefined);
    expect(get(object, ['a', 'c'], 'default')).toBe('default');
    expect(get(object, ['b'])).toBe(undefined);
    expect(get(object, ['b'], 'default')).toBe('default');
  });

  test('should correctly get array properties', () => {
    const object = { a: [1, 2, 3] };
    expect(get(object, 'a')).toEqual([1, 2, 3]);
    expect(get(object, 'a[0]')).toBe(1);
    expect(get(object, 'a[1]')).toBe(2);
    expect(get(object, 'a[3]')).toBe(undefined);
    expect(get(object, 'a[3]', 'default')).toBe('default');
    expect(get(object, ['a', '0'])).toBe(1);
    expect(get(object, ['a', '3'], 'default')).toBe('default');
  });

  test('should correctly handle complex paths', () => {
    const object = { a: [{ b: { c: 3 } }] };
    expect(get(object, 'a[0].b.c')).toBe(3);
    expect(get(object, 'a[0].b.d')).toBe(undefined);
    expect(get(object, 'a[0].b.d', 'default')).toBe('default');
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
    expect(get(object, ['a', '0', 'b', 'd'], 'default')).toBe('default');
  });

  test('should handle edge cases', () => {
    expect(get(null, 'a')).toBe(undefined);
    expect(get(null, 'a', 'default')).toBe('default');
    expect(get(undefined, 'a')).toBe(undefined);
    expect(get(undefined, 'a', 'default')).toBe('default');
    expect(get({}, '')).toBe(undefined);
    expect(get({}, [], 'default')).toBe(undefined); // Empty path should return undefined

    const object = { '': 1 };
    expect(get(object, '')).toBe(1);
  });
});
