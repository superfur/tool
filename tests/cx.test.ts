import { cx } from '../src/cx';

describe('cx', () => {
  it('should handle strings', () => {
    expect(cx('foo', 'bar')).toBe('foo bar');
    expect(cx('foo', null, 'bar', undefined)).toBe('foo bar');
  });

  it('should handle numbers', () => {
    expect(cx('foo', 123)).toBe('foo 123');
  });

  it('should handle objects', () => {
    expect(cx({ foo: true, bar: false, baz: true })).toBe('foo baz');
    expect(cx({ foo: true }, { bar: true })).toBe('foo bar');
  });

  it('should handle arrays', () => {
    expect(cx(['foo', 'bar'])).toBe('foo bar');
    expect(cx(['foo', null, false, 'bar'])).toBe('foo bar');
  });

  it('should handle nested arrays', () => {
    expect(cx(['foo', ['bar', 'baz']])).toBe('foo bar baz');
  });

  it('should handle complex combinations', () => {
    expect(
      cx(
        'foo',
        { bar: true, baz: false },
        ['qux', 'quux'],
        ['corge', { grault: true }]
      )
    ).toBe('foo bar qux quux corge grault');
  });

  it('should handle falsy values', () => {
    expect(cx(null, false, 'foo', undefined, 0, true, 'bar')).toBe('foo 0 bar');
  });

  it('should handle empty values', () => {
    expect(cx()).toBe('');
    expect(cx('')).toBe('');
    expect(cx(null)).toBe('');
    expect(cx(undefined)).toBe('');
    expect(cx({})).toBe('');
    expect(cx([])).toBe('');
  });
}); 