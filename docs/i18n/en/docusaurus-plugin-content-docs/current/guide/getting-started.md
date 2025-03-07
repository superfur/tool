---
sidebar_position: 1
---

# Getting Started

## Installation

Install with npm:

```bash
npm install @septem/tool
```

Or install with yarn:

```bash
yarn add @septem/tool
```

## Usage

### ES Module Import

```js
import { chunk, compact, filter } from '@septem/tool';

// Use array functions
const chunked = chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

const compacted = compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

// Use object functions
import { get, has, keys } from '@septem/tool';

const object = { 'a': [{ 'b': { 'c': 3 } }] };
const value = get(object, 'a[0].b.c');
// => 3
```

### CommonJS Import

```js
const { chunk, compact, filter } = require('@septem/tool');

// Use array functions
const chunked = chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
```

## Browser Direct Usage

In the browser, you can use it directly via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@septem/tool/dist/index.min.js"></script>
<script>
  // Use the global variable SeptemTool
  const chunked = SeptemTool.chunk(['a', 'b', 'c', 'd'], 2);
  // => [['a', 'b'], ['c', 'd']]
</script>
```

## Function Categories

@septem/tool provides various utility functions, categorized as follows:

- [Array Functions](/docs/api/array): Functions for handling arrays, such as `chunk`, `compact`, `filter`, etc.
- [Object Functions](/docs/api/object): Functions for handling objects, such as `assign`, `get`, `has`, etc.
- [Function Functions](/docs/api/function): Functions for handling functions, such as `debounce`, `once`, `throttle`, etc.
- [String Functions](/docs/api/string): Functions for handling strings, such as `camelCase`, `kebabCase`, etc.
- [Utility Functions](/docs/api/utility): Other utility functions, such as `deepClone`, `isEqual`, `random`, etc. 