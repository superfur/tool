---
sidebar_position: 2
---

# 对象函数

## assign

将源对象的自身可枚举属性分配给目标对象。

### 语法

```js
assign(object, ...sources)
```

### 参数

- `object` (Object): 目标对象
- `...sources` (...Object): 源对象

### 返回值

(Object): 返回目标对象

### 示例

```js
const object = { 'a': 1 };
const other = { 'b': 2 };

assign(object, other);
// => { 'a': 1, 'b': 2 }
```

## get

获取对象路径处的值。如果解析值为 undefined，则返回 defaultValue。

### 语法

```js
get(object, path, [defaultValue])
```

### 参数

- `object` (Object): 要查询的对象
- `path` (string|Array): 要获取的属性路径
- `[defaultValue]` (*): 解析值为 undefined 时返回的值

### 返回值

(*): 返回解析后的值

### 示例

```js
const object = { 'a': [{ 'b': { 'c': 3 } }] };

get(object, 'a[0].b.c');
// => 3

get(object, ['a', '0', 'b', 'c']);
// => 3

get(object, 'a.b.c', 'default');
// => 'default'
```

### 特殊情况

- 当 `object` 为 `null` 或 `undefined` 时，返回 `defaultValue`
- 当 `path` 为空字符串时，如果对象有空字符串键，则返回该键的值，否则返回 `undefined`
- 当 `path` 为空数组时，返回 `undefined`

## has

检查路径是否是对象的直接属性。

### 语法

```js
has(object, path)
```

### 参数

- `object` (Object): 要查询的对象
- `path` (string|Array): 要检查的路径

### 返回值

(boolean): 如果路径存在，则返回 `true`，否则返回 `false`

### 示例

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

### 特殊情况

- 当 `object` 为 `null` 或 `undefined` 时，返回 `false`
- 当 `path` 为空字符串时，如果对象有空字符串键，则返回 `true`，否则返回 `false`
- 当 `path` 为空数组时，对任何对象都返回 `true`

## keys

创建一个对象自身可枚举属性名称的数组。

### 语法

```js
keys(object)
```

### 参数

- `object` (Object): 要查询的对象

### 返回值

(Array): 返回属性名称的数组

### 示例

```js
keys({ 'a': 1, 'b': 2 });
// => ['a', 'b']
```

## merge

递归合并源对象的自身可枚举属性到目标对象。

### 语法

```js
merge(object, ...sources)
```

### 参数

- `object` (Object): 目标对象
- `...sources` (...Object): 源对象

### 返回值

(Object): 返回目标对象

### 示例

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