---
sidebar_position: 3
---

# Function Functions

## debounce

Creates a debounced function that delays invoking `func` until after `wait` milliseconds have elapsed since the last time the debounced function was invoked.

### Syntax

```js
debounce(func, wait)
```

### Parameters

- `func` (Function): The function to debounce
- `wait` (number): The number of milliseconds to delay

### Return Value

(Function): Returns the new debounced function

### Example

```js
// Avoid costly calculations while the window size is in flux
window.addEventListener('resize', debounce(calculateLayout, 150));

// Invoke `sendMail` when clicked, debouncing subsequent calls
element.addEventListener('click', debounce(sendMail, 300));
```

## once

Creates a function that is restricted to invoking `func` once. Repeat calls to the function return the value of the first invocation.

### Syntax

```js
once(func)
```

### Parameters

- `func` (Function): The function to restrict

### Return Value

(Function): Returns the new restricted function

### Example

```js
const initialize = once(() => {
  console.log('Initializing...');
  // Perform initialization tasks
});

initialize(); // Outputs: 'Initializing...'
initialize(); // No operation, returns result of first call
```

## throttle

Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds.

### Syntax

```js
throttle(func, wait)
```

### Parameters

- `func` (Function): The function to throttle
- `wait` (number): The number of milliseconds to throttle

### Return Value

(Function): Returns the new throttled function

### Example

```js
// Avoid excessively updating the position while scrolling
window.addEventListener('scroll', throttle(updatePosition, 100));

// Invoke `renewToken` when clicked, but not more than once every 5 minutes
const throttled = throttle(renewToken, 300000);
element.addEventListener('click', throttled);
``` 