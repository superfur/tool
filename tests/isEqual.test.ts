import isEqual from '../src/isEqual';

describe('isEqual function', () => {
  test('should correctly compare primitive types', () => {
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual('a', 'a')).toBe(true);
    expect(isEqual(true, true)).toBe(true);
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, undefined)).toBe(true);

    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual('a', 'b')).toBe(false);
    expect(isEqual(true, false)).toBe(false);
    expect(isEqual(null, undefined)).toBe(false);
  });

  test('should correctly compare arrays', () => {
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isEqual([1, 2, 3], [3, 2, 1])).toBe(false);
    expect(isEqual([1, 2, 3], [1, 2])).toBe(false);
    expect(isEqual([], [])).toBe(true);

    // Nested arrays
    expect(isEqual([1, [2, 3]], [1, [2, 3]])).toBe(true);
    expect(isEqual([1, [2, 3]], [1, [3, 2]])).toBe(false);
  });

  test('should correctly compare objects', () => {
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(isEqual({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true); // Different order
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
    expect(isEqual({ a: 1, b: 2 }, { a: 1 })).toBe(false);
    expect(isEqual({}, {})).toBe(true);

    // Nested objects
    expect(isEqual({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 3 } })).toBe(true);
    expect(isEqual({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 4 } })).toBe(false);
  });

  test('should correctly compare Date objects', () => {
    const date1 = new Date('2023-01-01');
    const date2 = new Date('2023-01-01');
    const date3 = new Date('2023-01-02');

    expect(isEqual(date1, date2)).toBe(true);
    expect(isEqual(date1, date3)).toBe(false);
  });

  test('should correctly compare RegExp objects', () => {
    expect(isEqual(/abc/g, /abc/g)).toBe(true);
    expect(isEqual(/abc/g, /abc/i)).toBe(false);
    expect(isEqual(/abc/, /def/)).toBe(false);
  });

  test('should correctly handle mixed types', () => {
    expect(
      isEqual({ a: 1, b: [1, 2, { c: 3 }] }, { a: 1, b: [1, 2, { c: 3 }] })
    ).toBe(true);
    expect(
      isEqual({ a: 1, b: [1, 2, { c: 3 }] }, { a: 1, b: [1, 2, { c: 4 }] })
    ).toBe(false);
  });
});
