# Variables and Scope in JavaScript

## 📌 What are Variables?

Variables are containers used to store data in JavaScript.

Example:

```js
let name = "Murali";
```

Here:

- `name` → variable
- `"Murali"` → value

---

# Types of Variables

JavaScript provides 3 ways to declare variables:

1. var
2. let
3. const

---

# 1️⃣ var

`var` is the old way of declaring variables.

## Features

- Function scoped
- Can be reassigned
- Can be redeclared
- Gets hoisted

Example:

```js
var name = "Murali";
var name = "React";

console.log(name);
```

Output:

```text
React
```

---

## Function Scope Example

```js
function test() {
  var x = 10;
  console.log(x);
}

test();
```

This works because `x` exists inside the function.

But:

```js
console.log(x);
```

will give an error.

---

# 2️⃣ let

`let` is the modern way to declare variables.

## Features

- Block scoped
- Can be reassigned
- Cannot be redeclared

Example:

```js
let age = 25;

age = 26;

console.log(age);
```

Output:

```text
26
```

---

## Block Scope Example

```js
{
  let city = "Pune";
  console.log(city);
}
```

This works.

But:

```js
console.log(city);
```

gives error because `city` only exists inside the block.

---

# 3️⃣ const

`const` is used for values that should not change.

## Features

- Block scoped
- Cannot be reassigned
- Must initialize immediately

Example:

```js
const country = "India";

console.log(country);
```

---

## ❌ Reassignment Error

```js
const country = "India";

country = "USA";
```

This gives error because `const` values cannot be changed.

---

# 📌 Difference Between var, let, and const

| Feature   | var      | let   | const |
| --------- | -------- | ----- | ----- |
| Scope     | Function | Block | Block |
| Reassign  | ✅       | ✅    | ❌    |
| Redeclare | ✅       | ❌    | ❌    |
| Hoisting  | ✅       | ✅    | ✅    |

---

# 📌 Scope in JavaScript

Scope determines where variables can be accessed.

There are mainly 3 types:

1. Global Scope
2. Function Scope
3. Block Scope

---

# 🌍 Global Scope

Variables declared outside functions or blocks are globally scoped.

Example:

```js
let username = "Murali";

function showUser() {
  console.log(username);
}

showUser();
```

Output:

```text
Murali
```

Global variables can be accessed anywhere.

---

# ⚙️ Function Scope

Variables declared using `var` inside a function are function scoped.

Example:

```js
function test() {
  var score = 100;
  console.log(score);
}

test();
```

Outside the function:

```js
console.log(score);
```

will give error.

---

# 🧱 Block Scope

Variables declared using `let` and `const` are block scoped.

Example:

```js
{
  let a = 10;
  const b = 20;

  console.log(a);
  console.log(b);
}
```

Outside the block:

```js
console.log(a);
console.log(b);
```

will give errors.

---

# 📌 Hoisting

Hoisting means JavaScript moves declarations to the top before execution.

---

## var Hoisting

Example:

```js
console.log(a);

var a = 10;
```

Output:

```text
undefined
```

JavaScript internally treats it like:

```js
var a;

console.log(a);

a = 10;
```

---

# 📌 Temporal Dead Zone (TDZ)

`let` and `const` are also hoisted but stay in a "Temporal Dead Zone" until initialized.

Example:

```js
console.log(age);

let age = 25;
```

This gives error.

---

# 📌 Best Practices

✅ Use `const` by default  
✅ Use `let` when value changes  
❌ Avoid `var` in modern JavaScript

---

# 📌 Summary

- Variables store data
- `var` is function scoped
- `let` and `const` are block scoped
- `const` cannot be reassigned
- Scope controls accessibility
- Hoisting moves declarations before execution

---

# 🛠️ Practice Tasks

## Task 1

Create variables using:

- var
- let
- const

---

## Task 2

Experiment with:

- reassignment
- redeclaration

---

## Task 3

Create examples for:

- global scope
- function scope
- block scope

---

## Task 4

Test hoisting behavior with:

- var
- let
- const

---

# 🚀 Mini Challenge

Create:

- calculator variables
- student information object
- score tracking variables

and print them using `console.log()`.
