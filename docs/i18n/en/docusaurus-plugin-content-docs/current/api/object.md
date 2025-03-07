---
sidebar_position: 2
---

# Object Functions

## assign

Assigns own enumerable properties of source objects to the destination object.

### Syntax

```js
assign(object, ...sources)
```

### Parameters

- `object` (Object): The destination object
- `...sources` (...Object): The source objects

### Return Value

(Object): Returns the destination object

### Example

```js
const object = { 'a': 1 };
const other = { 'b': 2 };

assign(object, other);
// => { 'a': 1, 'b': 2 }
```

## get

Gets the value at `path` of `object`. If the resolved value is `undefined`, the `defaultValue` is returned.

### Syntax

```js
get(object, path, [defaultValue])
```

### Parameters

- `object` (Object): The object to query
- `path` (string|Array): The path of the property to get
- `[defaultValue]` (*): The value returned for `undefined` resolved values

### Return Value

(*): Returns the resolved value

### Example

```js
const object = { 'a': [{ 'b': { 'c': 3 } }] };

get(object, 'a[0].b.c');
// => 3

get(object, ['a', '0', 'b', 'c']);
// => 3

get(object, 'a.b.c', 'default');
// => 'default'
```

### Edge Cases

- When `object` is `null` or `undefined`, returns `defaultValue`
- When `path` is an empty string, returns the value at the empty string key if it exists, otherwise returns `undefined`
- When `path` is an empty array, returns `undefined`

## has

Checks if `path` is a direct property of `object`.

### Syntax

```js
has(object, path)
```

### Parameters

- `object` (Object): The object to query
- `path` (string|Array): The path to check

### Return Value

(boolean): Returns `true` if `path` exists, else `false`

### Example

```js
const object = { 'a': { 'b': 2 } };

has(object, 'a');
// => true

has(object, 'a.b');
// => true

has(object, ['a', 'b']);
// => true

has(object, 'c');
// => false
```

### Edge Cases

- When `object` is `null` or `undefined`, returns `false`
- When `path` is an empty string, returns `true` if the object has an empty string key, otherwise returns `false`
- When `path` is an empty array, returns `true` for any object

## keys

Creates an array of the own enumerable property names of `object`.

### Syntax

```js
keys(object)
```

### Parameters

- `object` (Object): The object to query

### Return Value

(Array): Returns the array of property names

### Example

```js
keys({ 'a': 1, 'b': 2 });
// => ['a', 'b']
```

## merge

Recursively merges own enumerable properties of the source objects into the destination object.

### Syntax

```js
merge(object, ...sources)
```

### Parameters

- `object` (Object): The destination object
- `...sources` (...Object): The source objects

### Return Value

(Object): Returns the destination object

### Example

```js
const object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};

const other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};

merge(object, other);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
``` 