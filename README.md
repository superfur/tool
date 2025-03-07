# @septem/tool

A JavaScript utility library similar to lodash, providing various useful utility functions.

[中文文档](README-CN.md)

## Installation

```bash
npm install @septem/tool
# or
yarn add @septem/tool
```

## Usage

### Import the entire library

```javascript
// ES modules
import tool from '@septem/tool';

tool.isEqual([1, 2, 3], [1, 2, 3]); // => true

// CommonJS
const tool = require('@septem/tool');

tool.isEqual([1, 2, 3], [1, 2, 3]); // => true
```

### Import individual functions

```javascript
// ES modules
import { isEqual } from '@septem/tool';

isEqual([1, 2, 3], [1, 2, 3]); // => true

// CommonJS
const { isEqual } = require('@septem/tool');

isEqual([1, 2, 3], [1, 2, 3]); // => true
```

## API Documentation

### isEqual(value, other)

Deep comparison to check if two values are equal.

#### Parameters

- `value` (*): The first value to compare
- `other` (*): The second value to compare

#### Returns

- `boolean`: Returns true if the values are equal, otherwise false

#### Example

```javascript
isEqual([1, 2, 3], [1, 2, 3]);
// => true

isEqual({ 'a': 1, 'b': 2 }, { 'b': 2, 'a': 1 });
// => true

isEqual('a', 'a');
// => true

isEqual('a', Object('a'));
// => false
```

### deepClone(value)

Deep clone a value, creating a new value that is equal to the original but with different references.

#### Parameters

- `value` (*): The value to clone

#### Returns

- `*`: The cloned value

#### Example

```javascript
const objects = [{ 'a': 1 }, { 'b': 2 }];
const deep = deepClone(objects);
console.log(deep[0] === objects[0]);
// => false

const obj = { a: 1, b: { c: 2 } };
const clone = deepClone(obj);
obj.b.c = 3;
console.log(clone.b.c);
// => 2
```

### debounce(func, wait, [options])

Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.

#### Parameters

- `func` (Function): The function to debounce
- `wait` (number): The number of milliseconds to delay
- `options` (Object): The options object
  - `leading` (boolean): Specify invoking on the leading edge of the timeout, defaults to false
  - `trailing` (boolean): Specify invoking on the trailing edge of the timeout, defaults to true

#### Returns

- `Function`: Returns the new debounced function with the following methods:
  - `cancel()`: Cancels the debounced function call
  - `flush()`: Immediately invokes the function

#### Example

```javascript
// Avoid updating layout during window resize too frequently
window.addEventListener('resize', debounce(calculateLayout, 150));

// Send request only after user stops typing
element.addEventListener('input', debounce(sendRequest, 300));

// Use leading option to invoke at the beginning of the timeout
const clickHandler = debounce(handleClick, 300, { leading: true });

// Cancel a debounced function call
const debouncedFunc = debounce(func, 1000);
debouncedFunc();
// Cancel the call
debouncedFunc.cancel();
```

## Development

### Install dependencies

```bash
npm install
```

### Run tests

```bash
npm test
```

### Build

```bash
npm run build
```

### Generate documentation

```bash
npm run docs
```

## License

MIT