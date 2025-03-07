---
sidebar_position: 1
---

# 快速开始

## 安装

使用 npm 安装：

```bash
npm install @septem/tool
```

或者使用 yarn 安装：

```bash
yarn add @septem/tool
```

## 使用方法

### ES 模块导入

```js
import { chunk, compact, filter } from '@septem/tool';

// 使用数组函数
const chunked = chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

const compacted = compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

// 使用对象函数
import { get, has, keys } from '@septem/tool';

const object = { 'a': [{ 'b': { 'c': 3 } }] };
const value = get(object, 'a[0].b.c');
// => 3
```

### CommonJS 导入

```js
const { chunk, compact, filter } = require('@septem/tool');

// 使用数组函数
const chunked = chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
```

## 浏览器直接使用

在浏览器中，你可以通过 CDN 直接使用：

```html
<script src="https://cdn.jsdelivr.net/npm/@septem/tool/dist/index.min.js"></script>
<script>
  // 使用全局变量 SeptemTool
  const chunked = SeptemTool.chunk(['a', 'b', 'c', 'd'], 2);
  // => [['a', 'b'], ['c', 'd']]
</script>
```

## 函数分类

@septem/tool 提供了各种实用函数，分类如下：

- [数组函数](/docs/api/array)：用于处理数组的函数，如 `chunk`、`compact`、`filter` 等。
- [对象函数](/docs/api/object)：用于处理对象的函数，如 `assign`、`get`、`has` 等。
- [函数函数](/docs/api/function)：用于处理函数的函数，如 `debounce`、`once`、`throttle` 等。
- [字符串函数](/docs/api/string)：用于处理字符串的函数，如 `camelCase`、`kebabCase` 等。
- [实用工具函数](/docs/api/utility)：其他实用函数，如 `deepClone`、`isEqual`、`random` 等。 