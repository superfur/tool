---
sidebar_position: 4
---

# 字符串函数

## camelCase

将字符串转换为驼峰式。

### 语法

```js
camelCase(string)
```

### 参数

- `string` (string): 要转换的字符串

### 返回值

(string): 返回驼峰式字符串

### 示例

```js
camelCase('Foo Bar');
// => 'fooBar'

camelCase('--foo-bar--');
// => 'fooBar'

camelCase('__FOO_BAR__');
// => 'fooBar'
```

## kebabCase

将字符串转换为短横线连接式。

### 语法

```js
kebabCase(string)
```

### 参数

- `string` (string): 要转换的字符串

### 返回值

(string): 返回短横线连接式字符串

### 示例

```js
kebabCase('Foo Bar');
// => 'foo-bar'

kebabCase('fooBar');
// => 'foo-bar'

kebabCase('__FOO_BAR__');
// => 'foo-bar'
``` 