---
sidebar_position: 5
---

# 实用工具函数

## deepClone

创建 `value` 的深拷贝。

### 语法

```js
deepClone(value)
```

### 参数

- `value` (*): 要拷贝的值

### 返回值

(*): 返回深拷贝的值

### 示例

```js
const objects = [{ 'a': 1 }, { 'b': 2 }];

const deep = deepClone(objects);
console.log(deep[0] === objects[0]);
// => false
```

## isEqual

执行两个值之间的深度比较，以确定它们是否相等。

### 语法

```js
isEqual(value, other)
```

### 参数

- `value` (*): 要比较的值
- `other` (*): 另一个要比较的值

### 返回值

(boolean): 如果值相等，则返回 `true`，否则返回 `false`

### 示例

```js
const object = { 'a': 1 };
const other = { 'a': 1 };

isEqual(object, other);
// => true

object === other;
// => false
```

### 特殊情况

- 正确处理特殊的 JavaScript 对象，如 Date 和 RegExp
- 执行数组和对象的深度比较
- 将 `null` 和 `undefined` 仅视为等于它们自身

## random

生成一个包含在下限和上限之间的随机数。

### 语法

```js
random([lower=0], [upper=1], [floating])
```

### 参数

- `[lower=0]` (number): 下限
- `[upper=1]` (number): 上限
- `[floating]` (boolean): 指定是否返回浮点数

### 返回值

(number): 返回随机数

### 示例

```js
random(0, 5);
// => 0 到 5 之间的整数

random(5);
// => 0 到 5 之间的整数

random(1.2, 5.2);
// => 1.2 到 5.2 之间的浮点数
``` 