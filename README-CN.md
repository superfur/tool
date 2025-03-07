# @septem/tool

一个JavaScript工具库，类似于lodash，提供了各种实用的工具函数。

[English Documentation](README.md)

## 安装

```bash
npm install @septem/tool
# 或者
yarn add @septem/tool
```

## 使用

### 导入整个库

```javascript
// ES模块
import tool from '@septem/tool';

tool.isEqual([1, 2, 3], [1, 2, 3]); // => true

// CommonJS
const tool = require('@septem/tool');

tool.isEqual([1, 2, 3], [1, 2, 3]); // => true
```

### 导入单个函数

```javascript
// ES模块
import { isEqual } from '@septem/tool';

isEqual([1, 2, 3], [1, 2, 3]); // => true

// CommonJS
const { isEqual } = require('@septem/tool');

isEqual([1, 2, 3], [1, 2, 3]); // => true
```

## API文档

### isEqual(value, other)

深度比较两个值是否相等。

#### 参数

- `value` (*): 要比较的第一个值
- `other` (*): 要比较的第二个值

#### 返回值

- `boolean`: 如果两个值相等则返回true，否则返回false

#### 示例

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

深度克隆一个值，创建一个与原值相等但引用不同的新值。

#### 参数

- `value` (*): 要克隆的值

#### 返回值

- `*`: 克隆后的值

#### 示例

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

创建一个防抖函数，该函数会在等待N毫秒后调用func，如果在等待期间再次调用，则重新计时。

#### 参数

- `func` (Function): 要防抖的函数
- `wait` (number): 需要延迟的毫秒数
- `options` (Object): 选项对象
  - `leading` (boolean): 指定在延迟开始前调用，默认为false
  - `trailing` (boolean): 指定在延迟结束后调用，默认为true

#### 返回值

- `Function`: 返回新的防抖函数，该函数具有以下方法：
  - `cancel()`: 取消延迟的函数调用
  - `flush()`: 立即调用函数

#### 示例

```javascript
// 避免窗口在resize时过于频繁地更新布局
window.addEventListener('resize', debounce(calculateLayout, 150));

// 在用户停止输入后再发送请求
element.addEventListener('input', debounce(sendRequest, 300));

// 使用leading选项在延迟开始前调用
const clickHandler = debounce(handleClick, 300, { leading: true });

// 取消延迟的函数调用
const debouncedFunc = debounce(func, 1000);
debouncedFunc();
// 取消调用
debouncedFunc.cancel();
```

## 开发

### 安装依赖

```bash
npm install
```

### 运行测试

```bash
npm test
```

### 构建

```bash
npm run build
```

### 生成文档

```bash
npm run docs
```

## 许可证

MIT