import deepClone from '../src/deepClone';

describe('deepClone function', () => {
  test('should correctly clone primitive types', () => {
    expect(deepClone(1)).toBe(1);
    expect(deepClone('a')).toBe('a');
    expect(deepClone(true)).toBe(true);
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  test('should correctly clone arrays', () => {
    const array = [1, 2, 3];
    const cloned = deepClone(array);

    expect(cloned).toEqual(array);
    expect(cloned).not.toBe(array); // Ensure it's a new reference

    // Modifying the original array should not affect the cloned array
    array[0] = 99;
    expect(cloned[0]).toBe(1);
  });

  test('should correctly clone nested arrays', () => {
    const array = [1, [2, 3], 4];
    const cloned = deepClone(array);

    expect(cloned).toEqual(array);
    expect(cloned[1]).not.toBe(array[1]); // Ensure nested arrays are also new references

    // Modifying the original nested array should not affect the cloned array
    (array[1] as number[])[0] = 99;
    expect((cloned[1] as number[])[0]).toBe(2);
  });

  test('should correctly clone objects', () => {
    const obj = { a: 1, b: 2 };
    const cloned = deepClone(obj);

    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj); // Ensure it's a new reference

    // Modifying the original object should not affect the cloned object
    obj.a = 99;
    expect(cloned.a).toBe(1);
  });

  test('should correctly clone nested objects', () => {
    const obj = { a: 1, b: { c: 2 } };
    const cloned = deepClone(obj);

    expect(cloned).toEqual(obj);
    expect(cloned.b).not.toBe(obj.b); // Ensure nested objects are also new references

    // Modifying the original nested object should not affect the cloned object
    obj.b.c = 99;
    expect(cloned.b.c).toBe(2);
  });

  test('should correctly clone Date objects', () => {
    const date = new Date('2023-01-01');
    const cloned = deepClone(date);

    expect(cloned).toEqual(date);
    expect(cloned).not.toBe(date); // Ensure it's a new reference
    expect(cloned.getTime()).toBe(date.getTime());
  });

  test('should correctly clone RegExp objects', () => {
    const regex = /abc/g;
    const cloned = deepClone(regex);

    expect(cloned).toEqual(regex);
    expect(cloned).not.toBe(regex); // Ensure it's a new reference
    expect(cloned.source).toBe(regex.source);
    expect(cloned.flags).toBe(regex.flags);
  });

  test('should correctly handle complex nested structures', () => {
    const complex = {
      a: 1,
      b: [1, 2, { c: 3 }] as [number, number, { c: number }],
      d: { e: new Date('2023-01-01'), f: /test/i },
      g: null
    };
    const cloned = deepClone(complex);

    expect(cloned).toEqual(complex);
    expect(cloned).not.toBe(complex);
    expect(cloned.b).not.toBe(complex.b);
    expect(cloned.b[2]).not.toBe(complex.b[2]);
    expect(cloned.d).not.toBe(complex.d);
    expect(cloned.d.e).not.toBe(complex.d.e);
    expect(cloned.d.f).not.toBe(complex.d.f);

    // Modifying the original complex structure should not affect the cloned structure
    complex.b[2].c = 99;
    expect((cloned.b[2] as { c: number }).c).toBe(3);
  });
});
