# Arrays and Objects in JavaScript

## 📌 What are Arrays?

Arrays are used to store multiple values in a single variable.

Example:

```js
const fruits = ["Apple", "Banana", "Mango"];
```

---

# 📌 Accessing Array Elements

Arrays use index numbers starting from `0`.

Example:

```js
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);
```

Output:

```text
Apple
```

---

# 📌 Modifying Arrays

```js
const fruits = ["Apple", "Banana"];

fruits[1] = "Orange";

console.log(fruits);
```

Output:

```text
["Apple", "Orange"]
```

---

# 📌 Common Array Methods

---

## push()

Adds element at end.

```js
const numbers = [1, 2];

numbers.push(3);

console.log(numbers);
```

Output:

```text
[1, 2, 3]
```

---

## pop()

Removes last element.

```js
const numbers = [1, 2, 3];

numbers.pop();

console.log(numbers);
```

Output:

```text
[1, 2]
```

---

## shift()

Removes first element.

```js
const numbers = [1, 2, 3];

numbers.shift();

console.log(numbers);
```

Output:

```text
[2, 3]
```

---

## unshift()

Adds element at beginning.

```js
const numbers = [2, 3];

numbers.unshift(1);

console.log(numbers);
```

Output:

```text
[1, 2, 3]
```

---

# 📌 Looping Through Arrays

---

## for loop

```js
const fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

---

## for...of loop

```js
const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

---

# 📌 Important Array Methods for React

---

## map()

Creates a new array.

```js
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled);
```

Output:

```text
[2, 4, 6]
```

React heavily uses `map()` for rendering UI.

---

## filter()

Filters elements based on condition.

```js
const numbers = [10, 20, 30, 40];

const result = numbers.filter(num => num > 20);

console.log(result);
```

Output:

```text
[30, 40]
```

---

## find()

Returns first matching element.

```js
const users = [
  { id: 1, name: "Murali" },
  { id: 2, name: "Rahul" }
];

const user = users.find(u => u.id === 2);

console.log(user);
```

---

## reduce()

Reduces array into single value.

```js
const numbers = [1, 2, 3, 4];

const total = numbers.reduce((sum, num) => sum + num, 0);

console.log(total);
```

Output:

```text
10
```

---

# 📌 What are Objects?

Objects store data in key-value pairs.

Example:

```js
const user = {
  name: "Murali",
  age: 25,
  city: "Pune"
};
```

---

# 📌 Accessing Object Properties

---

## Dot Notation

```js
console.log(user.name);
```

---

## Bracket Notation

```js
console.log(user["age"]);
```

---

# 📌 Modifying Objects

```js
user.city = "Mumbai";

console.log(user);
```

---

# 📌 Adding New Properties

```js
user.country = "India";
```

---

# 📌 Nested Objects

```js
const student = {
  name: "Murali",
  marks: {
    math: 90,
    science: 95
  }
};

console.log(student.marks.math);
```

---

# 📌 Object Methods

Objects can contain functions.

Example:

```js
const user = {
  name: "Murali",

  greet() {
    console.log("Hello");
  }
};

user.greet();
```

---

# 📌 Destructuring

Extract values from arrays or objects.

---

## Object Destructuring

```js
const user = {
  name: "Murali",
  age: 25
};

const { name, age } = user;

console.log(name);
```

---

## Array Destructuring

```js
const colors = ["red", "blue"];

const [first, second] = colors;

console.log(first);
```

---

# 📌 Spread Operator

Copies arrays or objects.

---

## Array Spread

```js
const arr1 = [1, 2];

const arr2 = [...arr1, 3];

console.log(arr2);
```

Output:

```text
[1, 2, 3]
```

---

## Object Spread

```js
const user = {
  name: "Murali"
};

const updatedUser = {
  ...user,
  age: 25
};

console.log(updatedUser);
```

---

# 📌 Best Practices

✅ Use arrays for lists  
✅ Use objects for structured data  
✅ Prefer `map()` over loops in React  
✅ Use destructuring for cleaner code

---

# 📌 Summary

- Arrays store multiple values
- Objects store key-value pairs
- `map()`, `filter()`, `reduce()` are very important
- Destructuring simplifies code
- Spread operator copies data easily

---

# 🛠️ Practice Tasks

## Task 1
Create:
- student array
- product array

---

## Task 2
Use:
- map()
- filter()
- reduce()

on arrays.

---

## Task 3
Create nested objects.

---

## Task 4
Practice destructuring.

---

# 🚀 Mini Challenge

Build:
## Student Management System

Features:
- add student
- remove student
- calculate average marks
- filter top students