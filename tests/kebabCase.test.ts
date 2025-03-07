import kebabCase from '../src/kebabCase';

describe('kebabCase function', () => {
  test('should convert space-separated words to kebab case', () => {
    expect(kebabCase('Foo Bar')).toBe('foo-bar');
    expect(kebabCase('foo bar baz')).toBe('foo-bar-baz');
    expect(kebabCase('FOO BAR')).toBe('foo-bar');
  });

  test('should convert camel case to kebab case', () => {
    expect(kebabCase('fooBar')).toBe('foo-bar');
    expect(kebabCase('fooBarBaz')).toBe('foo-bar-baz');
    expect(kebabCase('FooBar')).toBe('foo-bar');
  });

  test('should convert dash-separated words to kebab case', () => {
    expect(kebabCase('--foo-bar--')).toBe('foo-bar');
    expect(kebabCase('foo-bar-baz')).toBe('foo-bar-baz');
    expect(kebabCase('-FOO-BAR-')).toBe('foo-bar');
  });

  test('should convert underscore-separated words to kebab case', () => {
    expect(kebabCase('__FOO_BAR__')).toBe('foo-bar');
    expect(kebabCase('foo_bar_baz')).toBe('foo-bar-baz');
    expect(kebabCase('_foo_bar_')).toBe('foo-bar');
  });

  test('should handle mixed separators and cases', () => {
    expect(kebabCase('Foo-Bar_baz')).toBe('foo-bar-baz');
    expect(kebabCase('--FOO_BAR--')).toBe('foo-bar');
    expect(kebabCase('fooBarBaz_qux')).toBe('foo-bar-baz-qux');
  });

  test('should handle single word inputs', () => {
    expect(kebabCase('foo')).toBe('foo');
    expect(kebabCase('FOO')).toBe('foo');
    expect(kebabCase('--foo--')).toBe('foo');
    expect(kebabCase('__FOO__')).toBe('foo');
  });

  test('should handle empty strings', () => {
    expect(kebabCase('')).toBe('');
    expect(kebabCase('   ')).toBe('');
    expect(kebabCase('---')).toBe('');
    expect(kebabCase('___')).toBe('');
  });

  test('should handle non-string inputs', () => {
    // @ts-ignore: Testing invalid input
    expect(kebabCase(null)).toBe('');
    // @ts-ignore: Testing invalid input
    expect(kebabCase(undefined)).toBe('');
    // @ts-ignore: Testing invalid input
    expect(kebabCase(123)).toBe('');
    // @ts-ignore: Testing invalid input
    expect(kebabCase({})).toBe('');
    // @ts-ignore: Testing invalid input
    expect(kebabCase([])).toBe('');
  });
});
