import { stringify, parse, parseUrl } from '../src/qs';

describe('qs', () => {
  describe('stringify', () => {
    it('should stringify simple objects', () => {
      expect(stringify({ a: 1, b: 'string' })).toBe('a=1&b=string');
    });

    it('should handle arrays', () => {
      expect(stringify({ a: [1, 2, 3] })).toBe('a=1&a=2&a=3');
    });

    it('should encode special characters', () => {
      expect(stringify({ 'special chars': 'hello world' })).toBe('special%20chars=hello%20world');
    });

    it('should filter out undefined and null values', () => {
      expect(stringify({ a: 1, b: undefined, c: null, d: 'value' })).toBe('a=1&d=value');
    });

    it('should return empty string for invalid input', () => {
      expect(stringify(null as any)).toBe('');
      expect(stringify(undefined as any)).toBe('');
      expect(stringify('not an object' as any)).toBe('');
    });
  });

  describe('parse', () => {
    it('should parse simple query strings', () => {
      expect(parse('a=1&b=string')).toEqual({ a: '1', b: 'string' });
    });

    it('should handle repeated keys as arrays', () => {
      expect(parse('a=1&a=2&a=3')).toEqual({ a: ['1', '2', '3'] });
    });

    it('should decode special characters', () => {
      expect(parse('special%20chars=hello%20world')).toEqual({ 'special chars': 'hello world' });
    });

    it('should handle empty or invalid input', () => {
      expect(parse('')).toEqual({});
      expect(parse('?')).toEqual({});
      expect(parse('#')).toEqual({});
      expect(parse(null as any)).toEqual({});
    });

    it('should ignore invalid key-value pairs', () => {
      expect(parse('a=1&invalid&b=2')).toEqual({ a: '1', b: '2' });
    });
  });

  describe('parseUrl', () => {
    it('should parse query string from URL', () => {
      expect(parseUrl('http://example.com?a=1&b=string')).toEqual({ a: '1', b: 'string' });
    });

    it('should handle URLs without query strings', () => {
      expect(parseUrl('http://example.com')).toEqual({});
    });

    it('should handle invalid input', () => {
      expect(parseUrl('')).toEqual({});
      expect(parseUrl(null as any)).toEqual({});
    });

    it('should handle complex URLs', () => {
      const url = 'https://example.com/path?user=john&age=25&interests=sports&interests=music#section';
      expect(parseUrl(url)).toEqual({
        user: 'john',
        age: '25',
        interests: ['sports', 'music']
      });
    });
  });
}); 