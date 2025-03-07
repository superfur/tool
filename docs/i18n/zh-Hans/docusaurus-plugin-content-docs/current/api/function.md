---
sidebar_position: 3
---

# 函数函数

## debounce

创建一个防抖函数，该函数会在等待 `wait` 毫秒后调用 `func`，该等待时间从上一次调用防抖函数后开始计算。

### 语法

```js
debounce(func, wait)
```

### 参数

- `func` (Function): 要防抖的函数
- `wait` (number): 需要延迟的毫秒数

### 返回值

(Function): 返回新的防抖函数

### 示例

```js
// 避免在窗口大小变化过程中进行昂贵的计算
window.addEventListener('resize', debounce(calculateLayout, 150));

// 当点击事件触发时调用 `sendMail`，防抖后续调用
element.addEventListener('click', debounce(sendMail, 300));
```

## once

创建一个只能调用一次的函数。重复调用该函数会返回第一次调用的结果。

### 语法

```js
once(func)
```

### 参数

- `func` (Function): 要限制的函数

### 返回值

(Function): 返回新的受限函数

### 示例

```js
const initialize = once(() => {
  console.log('初始化...');
  // 执行初始化任务
});

initialize(); // 输出: '初始化...'
initialize(); // 不执行任何操作，返回第一次调用的结果
```

## throttle

创建一个节流函数，该函数在 `wait` 毫秒内最多调用 `func` 一次。

### 语法

```js
throttle(func, wait)
```

### 参数

- `func` (Function): 要节流的函数
- `wait` (number): 需要节流的毫秒数

### 返回值

(Function): 返回新的节流函数

### 示例

```js
// 避免在滚动过程中过度更新位置
window.addEventListener('scroll', throttle(updatePosition, 100));

// 当点击事件触发时调用 `renewToken`，但每 5 分钟最多调用一次
const throttled = throttle(renewToken, 300000);
element.addEventListener('click', throttled);
``` 