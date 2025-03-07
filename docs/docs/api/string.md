---
sidebar_position: 4
---

# String Functions

## camelCase

Converts string to camel case.

### Syntax

```js
camelCase(string)
```

### Parameters

- `string` (string): The string to convert

### Return Value

(string): Returns the camel cased string

### Example

```js
camelCase('Foo Bar');
// => 'fooBar'

camelCase('--foo-bar--');
// => 'fooBar'

camelCase('__FOO_BAR__');
// => 'fooBar'
```

## kebabCase

Converts string to kebab case.

### Syntax

```js
kebabCase(string)
```

### Parameters

- `string` (string): The string to convert

### Return Value

(string): Returns the kebab cased string

### Example

```js
kebabCase('Foo Bar');
// => 'foo-bar'

kebabCase('fooBar');
// => 'foo-bar'

kebabCase('__FOO_BAR__');
// => 'foo-bar'
``` 