---
sidebar_position: 1
---

# Array Functions

## chunk

Creates an array of elements split into groups the length of `size`. If array can't be split evenly, the final chunk will be the remaining elements.

### Syntax

```js
chunk(array, [size=1])
```

### Parameters

- `array` (Array): The array to process
- `[size=1]` (number): The length of each chunk

### Return Value

(Array): Returns the new array of chunks

### Example

```js
chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

### Edge Cases

- When `size` is 0, negative, or NaN, returns an empty array `[]`
- When `array` is not an array, returns an empty array `[]`

## compact

Creates an array with all falsey values removed. Falsey values are `false`, `null`, `0`, `""`, `undefined`, and `NaN`.

### Syntax

```js
compact(array)
```

### Parameters

- `array` (Array): The array to compact

### Return Value

(Array): Returns the new array of filtered values

### Example

```js
compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```

## filter

Creates a new array with all elements that pass the test implemented by the provided function.

### Syntax

```js
filter(array, predicate)
```

### Parameters

- `array` (Array): The array to iterate over
- `predicate` (Function): The function invoked per iteration

### Return Value

(Array): Returns the new filtered array

### Example

```js
const users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

filter(users, ({ active }) => active);
// => [{ 'user': 'barney', 'age': 36, 'active': true }]
```

## find

Iterates over elements of `array`, returning the first element `predicate` returns truthy for.

### Syntax

```js
find(array, predicate)
```

### Parameters

- `array` (Array): The array to search
- `predicate` (Function): The function invoked per iteration

### Return Value

(*): Returns the matched element, else `undefined`

### Example

```js
const users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

find(users, o => o.age < 40);
// => { 'user': 'barney', 'age': 36, 'active': true }
```

## flatten

Flattens `array` a single level deep.

### Syntax

```js
flatten(array)
```

### Parameters

- `array` (Array): The array to flatten

### Return Value

(Array): Returns the new flattened array

### Example

```js
flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
```

## map

Creates an array of values by running each element in `array` through `iteratee`.

### Syntax

```js
map(array, iteratee)
```

### Parameters

- `array` (Array): The array to iterate over
- `iteratee` (Function): The function invoked per iteration

### Return Value

(Array): Returns the new mapped array

### Example

```js
function square(n) {
  return n * n;
}

map([4, 8], square);
// => [16, 64]
```

### Edge Cases

- Preserves the properties of sparse arrays, only processing elements that actually exist

## reduce

Reduces `array` to a value which is the accumulated result of running each element in `array` through `iteratee`, where each successive invocation is supplied the return value of the previous.

### Syntax

```js
reduce(array, iteratee, [accumulator])
```

### Parameters

- `array` (Array): The array to iterate over
- `iteratee` (Function): The function invoked per iteration
- `[accumulator]` (*): The initial value

### Return Value

(*): Returns the accumulated value

### Example

```js
reduce([1, 2], (sum, n) => sum + n, 0);
// => 3
```

## uniq

Creates a duplicate-free version of an array.

### Syntax

```js
uniq(array)
```

### Parameters

- `array` (Array): The array to inspect

### Return Value

(Array): Returns the new duplicate-free array

### Example

```js
uniq([2, 1, 2]);
// => [2, 1]
``` 