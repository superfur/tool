import camelCase from '../src/camelCase';

describe('camelCase function', () => {
  test('should convert space-separated words to camel case', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
    expect(camelCase('foo bar baz')).toBe('fooBarBaz');
    expect(camelCase('FOO BAR')).toBe('fooBar');
  });

  test('should convert dash-separated words to camel case', () => {
    expect(camelCase('--foo-bar--')).toBe('fooBar');
    expect(camelCase('foo-bar-baz')).toBe('fooBarBaz');
    expect(camelCase('-FOO-BAR-')).toBe('fooBar');
  });

  test('should convert underscore-separated words to camel case', () => {
    expect(camelCase('__FOO_BAR__')).toBe('fooBar');
    expect(camelCase('foo_bar_baz')).toBe('fooBarBaz');
    expect(camelCase('_foo_bar_')).toBe('fooBar');
  });

  test('should handle mixed separators', () => {
    expect(camelCase('Foo-Bar_baz')).toBe('fooBarBaz');
    expect(camelCase('--FOO_BAR--')).toBe('fooBar');
    expect(camelCase('foo bar-baz_qux')).toBe('fooBarBazQux');
  });

  test('should handle single word inputs', () => {
    expect(camelCase('foo')).toBe('foo');
    expect(camelCase('FOO')).toBe('foo');
    expect(camelCase('--foo--')).toBe('foo');
    expect(camelCase('__FOO__')).toBe('foo');
  });

  test('should handle empty strings', () => {
    expect(camelCase('')).toBe('');
    expect(camelCase('   ')).toBe('');
    expect(camelCase('---')).toBe('');
    expect(camelCase('___')).toBe('');
  });

  test('should handle non-string inputs', () => {
    // @ts-ignore: Testing invalid input
    expect(camelCase(null)).toBe('');
    // @ts-ignore: Testing invalid input
    expect(camelCase(undefined)).toBe('');
    // @ts-ignore: Testing invalid input
    expect(camelCase(123)).toBe('');
    // @ts-ignore: Testing invalid input
    expect(camelCase({})).toBe('');
    // @ts-ignore: Testing invalid input
    expect(camelCase([])).toBe('');
  });
});
