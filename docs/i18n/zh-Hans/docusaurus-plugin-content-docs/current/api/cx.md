---
sidebar_position: 7
---

# CSS 类名函数

## cx

条件性地将 CSS 类名组合在一起。

### 语法

```js
cx(...args)
```

### 参数

- `...args` (...any): 要组合的类名。可以是：
  - 字符串
  - 数字
  - 对象（键为类名，值为条件）
  - 数组（嵌套的类名）
  - 假值（会被忽略）

### 返回值

(string): 返回组合后的类名字符串

### 示例

```js
// 字符串和数字
cx('foo', 'bar');
// => 'foo bar'

// 对象（条件性）
cx({
  foo: true,
  bar: false,
  baz: true
});
// => 'foo baz'

// 数组
cx(['foo', 'bar'], 'baz');
// => 'foo bar baz'

// 复杂组合
cx(
  'foo',
  { bar: true, baz: false },
  ['qux', 'quux'],
  ['corge', { grault: true }]
);
// => 'foo bar qux quux corge grault'
```

### 特殊情况

- 忽略假值
- 空字符串、空数组和空对象会返回空字符串
- 数字会被转换为字符串
- 嵌套数组会被展平 