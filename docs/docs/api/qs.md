---
sidebar_position: 6
---

# Query String Functions

## stringify

Serializes an object into a URL query string.

### Syntax

```js
stringify(obj)
```

### Parameters

- `obj` (Object): The object to serialize

### Return Value

(string): Returns the serialized query string

### Example

```js
stringify({ a: 1, b: 'string' });
// => 'a=1&b=string'

stringify({ tags: ['javascript', 'typescript'] });
// => 'tags=javascript&tags=typescript'

stringify({ 'special chars': 'hello world' });
// => 'special%20chars=hello%20world'
```

### Edge Cases

- Filters out `undefined` and `null` values
- Returns empty string for invalid input (null, undefined, or non-object values)

## parse

Parses a URL query string into an object.

### Syntax

```js
parse(str)
```

### Parameters

- `str` (string): The query string to parse

### Return Value

(Object): Returns the parsed object

### Example

```js
parse('a=1&b=string');
// => { a: '1', b: 'string' }

parse('tags=javascript&tags=typescript');
// => { tags: ['javascript', 'typescript'] }

parse('special%20chars=hello%20world');
// => { 'special chars': 'hello world' }
```

### Edge Cases

- Returns empty object for empty or invalid input
- Handles repeated keys as arrays
- Ignores invalid key-value pairs

## parseUrl

Extracts and parses the query string from a URL.

### Syntax

```js
parseUrl(url)
```

### Parameters

- `url` (string): The URL to parse

### Return Value

(Object): Returns the parsed query string object

### Example

```js
parseUrl('http://example.com?user=john&age=25');
// => { user: 'john', age: '25' }

parseUrl('https://api.example.com/search?tags=js&tags=ts');
// => { tags: ['js', 'ts'] }
```

### Edge Cases

- Returns empty object for URLs without query strings
- Returns empty object for invalid input
- Properly handles URLs with hash fragments 