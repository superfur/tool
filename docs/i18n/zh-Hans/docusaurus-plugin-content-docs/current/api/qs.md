---
sidebar_position: 6
---

# 查询字符串函数

## stringify

将对象序列化为 URL 查询字符串。

### 语法

```js
stringify(obj)
```

### 参数

- `obj` (Object): 要序列化的对象

### 返回值

(string): 返回序列化后的查询字符串

### 示例

```js
stringify({ a: 1, b: 'string' });
// => 'a=1&b=string'

stringify({ tags: ['javascript', 'typescript'] });
// => 'tags=javascript&tags=typescript'

stringify({ 'special chars': 'hello world' });
// => 'special%20chars=hello%20world'
```

### 特殊情况

- 过滤掉 `undefined` 和 `null` 值
- 对于无效输入（null、undefined 或非对象值）返回空字符串

## parse

将 URL 查询字符串解析为对象。

### 语法

```js
parse(str)
```

### 参数

- `str` (string): 要解析的查询字符串

### 返回值

(Object): 返回解析后的对象

### 示例

```js
parse('a=1&b=string');
// => { a: '1', b: 'string' }

parse('tags=javascript&tags=typescript');
// => { tags: ['javascript', 'typescript'] }

parse('special%20chars=hello%20world');
// => { 'special chars': 'hello world' }
```

### 特殊情况

- 对于空或无效输入返回空对象
- 将重复的键处理为数组
- 忽略无效的键值对

## parseUrl

从 URL 中提取并解析查询字符串。

### 语法

```js
parseUrl(url)
```

### 参数

- `url` (string): 要解析的 URL

### 返回值

(Object): 返回解析后的查询字符串对象

### 示例

```js
parseUrl('http://example.com?user=john&age=25');
// => { user: 'john', age: '25' }

parseUrl('https://api.example.com/search?tags=js&tags=ts');
// => { tags: ['js', 'ts'] }
```

### 特殊情况

- 对于没有查询字符串的 URL 返回空对象
- 对于无效输入返回空对象
- 正确处理带有哈希片段的 URL 