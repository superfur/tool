---
sidebar_position: 1
---

# 数组函数

## chunk

将数组拆分成长度为 `size` 的多个数组。如果数组不能被平均分割，则最后一个块将是剩余的元素。

### 语法

```js
chunk(array, [size=1])
```

### 参数

- `array` (Array): 要处理的数组
- `[size=1]` (number): 每个块的长度

### 返回值

(Array): 返回新的分块数组

### 示例

```js
chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

### 特殊情况

- 当 `size` 为 0、负数或 NaN 时，返回空数组 `[]`
- 当 `array` 不是数组时，返回空数组 `[]`

## compact

创建一个新数组，包含所有非假值元素。假值包括 `false`、`null`、`0`、`""`、`undefined` 和 `NaN`。

### 语法

```js
compact(array)
```

### 参数

- `array` (Array): 要处理的数组

### 返回值

(Array): 返回过滤后的新数组

### 示例

```js
compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```

## filter

创建一个新数组，包含通过 `predicate` 检查的所有元素。

### 语法

```js
filter(array, predicate)
```

### 参数

- `array` (Array): 要迭代的数组
- `predicate` (Function): 每次迭代调用的函数

### 返回值

(Array): 返回过滤后的新数组

### 示例

```js
const users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

filter(users, ({ active }) => active);
// => [{ 'user': 'barney', 'age': 36, 'active': true }]
```

## find

遍历 `array` 中的元素，返回 `predicate` 返回真值的第一个元素。

### 语法

```js
find(array, predicate)
```

### 参数

- `array` (Array): 要搜索的数组
- `predicate` (Function): 每次迭代调用的函数

### 返回值

(*): 返回匹配的元素，否则返回 `undefined`

### 示例

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

将数组扁平化一级。

### 语法

```js
flatten(array)
```

### 参数

- `array` (Array): 要扁平化的数组

### 返回值

(Array): 返回新的扁平化数组

### 示例

```js
flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
```

## map

创建一个新数组，其中的值是 `array` 中的每个元素经过 `iteratee` 处理后的结果。

### 语法

```js
map(array, iteratee)
```

### 参数

- `array` (Array): 要迭代的数组
- `iteratee` (Function): 每次迭代调用的函数

### 返回值

(Array): 返回新的映射后的数组

### 示例

```js
function square(n) {
  return n * n;
}

map([4, 8], square);
// => [16, 64]
```

### 特殊情况

- 保留稀疏数组的特性，只处理数组中实际存在的元素

## reduce

将 `array` 中的元素减少为单个值，从左到右执行 `iteratee` 函数。

### 语法

```js
reduce(array, iteratee, [accumulator])
```

### 参数

- `array` (Array): 要迭代的数组
- `iteratee` (Function): 每次迭代调用的函数
- `[accumulator]` (*): 初始值

### 返回值

(*): 返回累积的值

### 示例

```js
reduce([1, 2], (sum, n) => sum + n, 0);
// => 3
```

## uniq

创建一个去重后的 `array` 副本。

### 语法

```js
uniq(array)
```

### 参数

- `array` (Array): 要检查的数组

### 返回值

(Array): 返回新的去重数组

### 示例

```js
uniq([2, 1, 2]);
// => [2, 1]
``` 