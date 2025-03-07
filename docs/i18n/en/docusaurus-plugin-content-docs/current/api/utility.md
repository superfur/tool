---
sidebar_position: 5
---

# Utility Functions

## deepClone

Creates a deep clone of `value`.

### Syntax

```js
deepClone(value)
```

### Parameters

- `value` (*): The value to clone

### Return Value

(*): Returns the deep cloned value

### Example

```js
const objects = [{ 'a': 1 }, { 'b': 2 }];

const deep = deepClone(objects);
console.log(deep[0] === objects[0]);
// => false
```

## isEqual

Performs a deep comparison between two values to determine if they are equivalent.

### Syntax

```js
isEqual(value, other)
```

### Parameters

- `value` (*): The value to compare
- `other` (*): The other value to compare

### Return Value

(boolean): Returns `true` if the values are equivalent, else `false`

### Example

```js
const object = { 'a': 1 };
const other = { 'a': 1 };

isEqual(object, other);
// => true

object === other;
// => false
```

### Edge Cases

- Correctly handles special JavaScript objects like Date and RegExp
- Performs deep comparison of arrays and objects
- Treats `null` and `undefined` as equal only to themselves

## random

Produces a random number between the inclusive lower and upper bounds.

### Syntax

```js
random([lower=0], [upper=1], [floating])
```

### Parameters

- `[lower=0]` (number): The lower bound
- `[upper=1]` (number): The upper bound
- `[floating]` (boolean): Specify returning a floating-point number

### Return Value

(number): Returns the random number

### Example

```js
random(0, 5);
// => an integer between 0 and 5

random(5);
// => an integer between 0 and 5

random(1.2, 5.2);
// => a floating-point number between 1.2 and 5.2
``` 