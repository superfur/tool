---
sidebar_position: 7
---

# CSS Class Functions

## cx

Conditionally join CSS class names together.

### Syntax

```js
cx(...args)
```

### Parameters

- `...args` (...any): The class names to join. Can be:
  - Strings
  - Numbers
  - Objects (keys as class names, values as conditions)
  - Arrays (nested class names)
  - Falsy values (ignored)

### Return Value

(string): Returns the joined class names

### Example

```js
// Strings and numbers
cx('foo', 'bar');
// => 'foo bar'

// Objects (conditional)
cx({
  foo: true,
  bar: false,
  baz: true
});
// => 'foo baz'

// Arrays
cx(['foo', 'bar'], 'baz');
// => 'foo bar baz'

// Complex combinations
cx(
  'foo',
  { bar: true, baz: false },
  ['qux', 'quux'],
  ['corge', { grault: true }]
);
// => 'foo bar qux quux corge grault'
```

### Edge Cases

- Falsy values are ignored
- Empty strings, arrays, and objects result in empty string
- Numbers are converted to strings
- Nested arrays are flattened 