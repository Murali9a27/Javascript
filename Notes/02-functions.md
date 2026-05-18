# Functions in JavaScript

## 📌 What is a Function?

A function is a reusable block of code designed to perform a specific task.

Functions help:
- avoid code repetition
- organize code
- make programs reusable and maintainable

---

# 📌 Basic Function Syntax

```js
function greet() {
  console.log("Hello");
}
```

---

# 📌 Calling a Function

Functions only run when called.

Example:

```js
function greet() {
  console.log("Hello");
}

greet();
```

Output:

```text
Hello
```

---

# 📌 Function Parameters

Parameters are variables passed into a function.

Example:

```js
function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Murali");
```

Output:

```text
Hello Murali
```

---

# 📌 Multiple Parameters

```js
function add(a, b) {
  console.log(a + b);
}

add(10, 20);
```

Output:

```text
30
```

---

# 📌 Return Keyword

`return` sends data back from a function.

Example:

```js
function multiply(a, b) {
  return a * b;
}

const result = multiply(5, 4);

console.log(result);
```

Output:

```text
20
```

---

# 📌 Function Expression

Functions can also be stored inside variables.

Example:

```js
const greet = function () {
  console.log("Hello");
};

greet();
```

---

# 📌 Arrow Functions

Modern JavaScript uses arrow functions.

Example:

```js
const greet = () => {
  console.log("Hello");
};
```

---

# 📌 Arrow Function with Parameters

```js
const add = (a, b) => {
  return a + b;
};
```

---

# 📌 Short Arrow Function

If there is only one return statement:

```js
const add = (a, b) => a + b;
```

---

# 📌 Difference Between Normal Function and Arrow Function

| Normal Function | Arrow Function |
|---|---|
| Uses `function` keyword | Uses `=>` |
| Has its own `this` | Inherits `this` |
| Traditional syntax | Modern syntax |

---

# 📌 Callback Functions

A function passed into another function is called a callback.

Example:

```js
function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function done() {
  console.log("Completed");
}

greet("Murali", done);
```

---

# 📌 Higher Order Functions

Functions that:
- accept functions as arguments
- or return functions

are called higher-order functions.

Example:

```js
function operation(a, b, callback) {
  return callback(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(operation(5, 3, add));
```

---

# 📌 Default Parameters

```js
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

greet();
```

Output:

```text
Hello Guest
```

---

# 📌 Rest Parameters

Used to accept multiple values.

Example:

```js
function total(...numbers) {
  console.log(numbers);
}

total(1, 2, 3, 4);
```

---

# 📌 Scope Inside Functions

Variables declared inside functions only exist there.

Example:

```js
function test() {
  let x = 10;
  console.log(x);
}
```

Outside:

```js
console.log(x);
```

gives error.

---

# 📌 Best Practices

✅ Keep functions small  
✅ Use meaningful names  
✅ Reuse functions  
✅ Prefer arrow functions in modern JavaScript

---

# 📌 Summary

- Functions are reusable blocks of code
- Parameters receive values
- `return` sends values back
- Arrow functions are modern syntax
- Callback functions enable async programming
- Higher-order functions work with other functions

---

# 🛠️ Practice Tasks

## Task 1
Create:
- add
- subtract
- multiply
- divide

functions.

---

## Task 2
Create a temperature converter function.

---

## Task 3
Create a function that returns:
- even
- odd

based on input.

---

## Task 4
Create arrow function versions of all functions.

---

# 🚀 Mini Challenge

Build:
## Simple Calculator

Features:
- addition
- subtraction
- multiplication
- division

using functions only.