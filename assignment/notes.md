# JavaScript Notes

> Topics covered: **Sets · JSON · Dates · Classes**

---

# 1. JavaScript Sets

## What is a Set?

A **Set** is a built-in JavaScript object that stores **unique values** of any type.

| Characteristic | Detail |
|----------------|--------|
| Unique values | Duplicates are automatically removed |
| Ordered | Maintains insertion order |
| Any type | Strings, numbers, objects, etc. |

```javascript
let numbers = new Set([1, 2, 3, 3, 4, 4]);
console.log(numbers);
// Output: Set(4) {1, 2, 3, 4}
```

---

## Creating a Set

```javascript
// Empty Set
let mySet = new Set();

// Set with values
let fruits = new Set(["apple", "banana", "mango"]);

// Set from an array
let numbers = [1, 2, 3, 3, 4];
let uniqueNumbers = new Set(numbers);
```

---

## Set Methods

### `add()` — Add a value

```javascript
let colors = new Set();
colors.add("red");
colors.add("blue");
colors.add("green");
colors.add("red"); // duplicate — ignored

console.log(colors);
// Output: Set(3) {"red", "blue", "green"}
```

### `has()` — Check if a value exists

```javascript
let fruits = new Set(["apple", "banana", "orange"]);
console.log(fruits.has("banana")); // true
console.log(fruits.has("grapes")); // false
```

### `delete()` — Remove a value

```javascript
let numbers = new Set([1, 2, 3, 4]);
numbers.delete(3);
console.log(numbers);
// Output: Set(3) {1, 2, 4}
```

### `clear()` — Remove all values

```javascript
let letters = new Set(["a", "b", "c"]);
letters.clear();
console.log(letters);
// Output: Set(0) {}
```

### `size` — Count values

```javascript
let items = new Set(["pen", "book", "bag"]);
console.log(items.size); // 3
```

---

## Looping Through a Set

```javascript
// for...of
let fruits = new Set(["apple", "banana", "mango"]);
for (let fruit of fruits) {
    console.log(fruit);
}

// forEach
let numbers = new Set([10, 20, 30]);
numbers.forEach(num => console.log(num));
```

---

## Converting Set to Array (Remove Duplicates)

```javascript
let numbers = [1, 2, 3, 3, 4, 4, 5];
let uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);
// Output: [1, 2, 3, 4, 5]
```

> This is one of the most common real-world uses of Sets.

---

## Practical Example — Remove Duplicate Emails

```javascript
let emails = [
    "user1@gmail.com",
    "user2@gmail.com",
    "user1@gmail.com",
    "user3@gmail.com"
];
let uniqueEmails = [...new Set(emails)];
console.log(uniqueEmails);
```

---

## Advanced — Finding Common Values Between Arrays

```javascript
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let common = arr1.filter(num => new Set(arr2).has(num));
console.log(common);
// Output: [3, 4]
```

---

## Sets Quick Reference

| Method | Purpose |
|--------|---------|
| `add(value)` | Add a value |
| `delete(value)` | Remove a value |
| `has(value)` | Check if value exists |
| `clear()` | Remove all values |
| `size` | Number of values |

> **Sets are useful for:** removing duplicates, storing unique IDs, checking existence quickly, and set operations.

---

## Sets — Quiz

**Quiz 1** — What will be the output?

```javascript
let numbers = new Set([1, 2, 3, 3, 4]);
console.log(numbers.size);
```

- A) 3 &nbsp; **B) 4 ✓** &nbsp; C) 5 &nbsp; D) Error

---

**Quiz 2** — What will this print?

```javascript
let set = new Set();
set.add("apple");
set.add("apple");
set.add("banana");
console.log(set);
```

---

**Quiz 3** — Complete the code to check if `"Kenya"` exists.

```javascript
let countries = new Set(["Kenya", "Uganda", "Tanzania"]);
console.log( /* your answer */ );
```

---

**Quiz 4** — Convert to unique values. Expected: `[5, 6, 7, 8]`

```javascript
let numbers = [5, 5, 6, 7, 7, 8];
```

---

**Quiz 5** — What will be the output?

```javascript
let set = new Set([10, 20, 30]);
set.delete(20);
console.log(set);
```

---

## Sets — Coding Challenges

**Challenge 1 — Remove Duplicate Names**

```javascript
let names = ["John", "Jane", "John", "Mary", "Jane"];
// Expected: ["John", "Jane", "Mary"]
```

**Challenge 2 — Find Unique Numbers**

```javascript
let nums = [1, 2, 2, 3, 4, 4, 5];
// Return only unique values
```

**Challenge 3 — Count Unique Words**

```javascript
let words = ["apple", "banana", "apple", "orange", "banana"];
// Expected output: 3
```

---
---

# 2. JSON in JavaScript

## What is JSON?

**JSON** = **J**ava**S**cript **O**bject **N**otation

A lightweight **text format** for storing and exchanging data. Used in:

- APIs
- Databases
- Configuration files
- Frontend ↔ Backend communication

```json
{
  "name": "Kevin",
  "age": 25,
  "city": "Nairobi"
}
```

---

## JSON vs JavaScript Object

| | JavaScript Object | JSON |
|-|-------------------|------|
| Key quotes | Optional | **Required** (double quotes) |
| Functions | Allowed | Not allowed |
| `undefined` | Allowed | Not allowed |
| Type | Real JS object | Plain text/string |

```javascript
// JavaScript Object
let user = { name: "Kevin", age: 25 };

// JSON (it's just a string)
'{"name":"Kevin","age":25}'
```

---

## `JSON.stringify()` — Object → JSON String

```javascript
let student = {
    name: "John",
    age: 20,
    course: "Web Development"
};

let jsonData = JSON.stringify(student);
console.log(jsonData);
// Output: {"name":"John","age":20,"course":"Web Development"}

console.log(typeof jsonData); // string
```

---

## `JSON.parse()` — JSON String → Object

```javascript
let jsonData = '{"name":"John","age":20}';
let obj = JSON.parse(jsonData);

console.log(obj.name);   // John
console.log(typeof obj); // object
```

---

## Real World — API Call

```javascript
fetch("https://api.example.com/users")
    .then(response => response.json())  // JSON -> object
    .then(data => console.log(data));
```

---

## JSON Data Types

| Type | Example |
|------|---------|
| String | `"Hello"` |
| Number | `42` |
| Boolean | `true` / `false` |
| Array | `[1, 2, 3]` |
| Object | `{"key": "value"}` |
| null | `null` |

```json
{
  "name": "Kevin",
  "age": 30,
  "isStudent": false,
  "skills": ["HTML", "CSS", "JavaScript"],
  "address": { "city": "Nairobi", "country": "Kenya" }
}
```

---

## Nested JSON

```json
{
  "student": {
    "name": "Ian",
    "address": { "city": "Eldoret", "country": "Kenya" }
  }
}
```

```javascript
let data = {
    student: { name: "Ian", address: { city: "Eldoret" } }
};
console.log(data.student.address.city); // Eldoret
```

---

## JSON Arrays

```javascript
let data = {
    students: [{ name: "John" }, { name: "Jane" }, { name: "Mary" }]
};
console.log(data.students[1].name); // Jane
```

---

## Valid vs Invalid JSON

```
// Wrong - keys without quotes
{ name: "Kevin", age: 25 }

// Correct
{ "name": "Kevin", "age": 25 }
```

---

## Advanced — localStorage Example

```javascript
// Save to localStorage
let user = { name: "Kevin", age: 25 };
localStorage.setItem("user", JSON.stringify(user));

// Read back
let storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // Kevin
```

---

## JSON Quick Reference

| Method | Purpose |
|--------|---------|
| `JSON.stringify(obj)` | Object → JSON string |
| `JSON.parse(str)` | JSON string → Object |

---

## JSON — Quiz

**Quiz 1** — What will `typeof json` return?

```javascript
let obj = { name: "Kevin", age: 30 };
let json = JSON.stringify(obj);
console.log(typeof json);
```

- A) object &nbsp; **B) string ✓** &nbsp; C) number &nbsp; D) undefined

---

**Quiz 2** — What will be printed?

```javascript
let json = '{"city":"Nairobi","country":"Kenya"}';
let data = JSON.parse(json);
console.log(data.city);
```

---

**Quiz 3** — Fix the JSON error.

```json
{ name: "John", age: 22 }
```

---

**Quiz 4** — Convert this object to JSON.

```javascript
let product = { name: "Phone", price: 500 };
```

---

**Quiz 5** — Convert this JSON to a JavaScript object.

```javascript
let json = '{"name":"Mary","age":24}';
```

---

## JSON — Coding Challenges

**Challenge 1** — Convert to JSON.

```javascript
let user = { username: "admin", password: "12345" };
```

**Challenge 2** — Parse and print the country.

```javascript
let json = '{"name":"Kevin","country":"Kenya"}';
```

**Challenge 3** — Access `"CSS"` from this data.

```javascript
let json = '{"skills":["HTML","CSS","JavaScript"]}';
```

---
---

# 3. Dates in JavaScript

## What is a Date?

JavaScript's `Date` object works with dates, times, and timestamps. Used in:

- Timestamps in databases
- Scheduling and booking systems
- Countdown timers
- Logging events

```javascript
let today = new Date();
console.log(today);
// Example: Tue Mar 10 2026 10:25:30 GMT+0300
```

---

## Creating a Date

```javascript
let now   = new Date();                       // current date & time
let date  = new Date("2026-03-10");           // from string
let date2 = new Date(2026, 2, 10);            // year, month (0-indexed), day
let date3 = new Date(2026, 2, 10, 14, 30, 0); // with time
```

> **Months are 0-indexed:** January = `0`, February = `1`, March = `2` ...

---

## Getting Parts of a Date

```javascript
let today = new Date();

console.log(today.getFullYear()); // e.g. 2026
console.log(today.getMonth());    // 0-11 (0 = January)
console.log(today.getDate());     // 1-31
console.log(today.getDay());      // 0-6 (0 = Sunday)
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
```

---

## Day of the Week

`getDay()` returns a number:

| Value | Day |
|-------|-----|
| 0 | Sunday |
| 1 | Monday |
| 2 | Tuesday |
| 3 | Wednesday |
| 4 | Thursday |
| 5 | Friday |
| 6 | Saturday |

---

## Setting Date Values

```javascript
let date = new Date();
date.setFullYear(2030);
date.setMonth(11);  // December
date.setDate(25);
console.log(date);
```

---

## Timestamp

```javascript
let timestamp = Date.now();
console.log(timestamp); // milliseconds since Jan 1, 1970
```

---

## Formatting Dates

```javascript
let today = new Date();
let d = today.getDate();
let m = today.getMonth() + 1; // +1 because months are 0-indexed
let y = today.getFullYear();
console.log(d + "/" + m + "/" + y);
// Output: 10/3/2026
```

---

## Date Difference

```javascript
let start = new Date("2026-03-01");
let end   = new Date("2026-03-10");

let diff = end - start; // milliseconds
let days = diff / (1000 * 60 * 60 * 24);
console.log(days); // 9
```

---

## Real World — Age Calculator

```javascript
let birthYear = 2000;
let age = new Date().getFullYear() - birthYear;
console.log(age);
```

---

## Advanced — Countdown Timer

```javascript
let eventDate = new Date("2026-12-25");
let today = new Date();
let days = Math.floor((eventDate - today) / (1000 * 60 * 60 * 24));
console.log(days + " days remaining");
```

---

## Dates Quick Reference

| Feature | Example |
|---------|---------|
| Current date | `new Date()` |
| Specific date | `new Date("2026-03-10")` |
| Timestamp | `Date.now()` |
| Get year | `getFullYear()` |
| Get month | `getMonth()` (0-11) |
| Get day of month | `getDate()` |
| Get day of week | `getDay()` (0-6) |
| Set year | `setFullYear(2030)` |

---

## Dates — Quiz

**Quiz 1** — What will this output?

```javascript
let date = new Date(2026, 0, 1);
console.log(date.getMonth());
```

- **A) 0 ✓** &nbsp; B) 1 &nbsp; C) January &nbsp; D) Error

---

**Quiz 2** — What will this print?

```javascript
let today = new Date();
console.log(today.getFullYear());
```

---

**Quiz 3** — Fix the code.

```javascript
let date = new Date();
console.log(date.getmonth()); // wrong — fix it
```

---

**Quiz 4** — Create a date for 25 December 2030.

**Quiz 5** — What will this output?

```javascript
console.log(Date.now());
```

---

## Dates — Coding Challenges

**Challenge 1 — Show Current Time** — Format: `HH:MM:SS`

**Challenge 2 — Show Today's Date** — Format: `DD/MM/YYYY`

**Challenge 3 — Days Between Dates**

```javascript
// Calculate days between 2026-03-01 and 2026-03-10
```

---
---

# 4. JavaScript Classes

## What is a Class?

A **class** is a blueprint for creating objects. It defines:

- **Properties** — data the object holds
- **Methods** — actions the object can perform

```
Blueprint (Class) --> produces --> Instances (Objects)
```

---

## Creating a Class

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

| Keyword | Meaning |
|---------|---------|
| `class` | Defines a class |
| `constructor` | Runs when object is created with `new` |
| `this` | Refers to the current object |

---

## Creating Objects

```javascript
let person1 = new Person("Kevin", 30);
let person2 = new Person("Jane", 25);
console.log(person1); // Person { name: "Kevin", age: 30 }
console.log(person2); // Person { name: "Jane", age: 25 }
```

---

## Adding Methods

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello my name is " + this.name);
    }
}

let p1 = new Person("Kevin", 30);
p1.greet(); // Hello my name is Kevin
```

---

## Multiple Methods

```javascript
class Calculator {
    add(a, b)      { return a + b; }
    multiply(a, b) { return a * b; }
}

let calc = new Calculator();
console.log(calc.add(5, 3));       // 8
console.log(calc.multiply(4, 6));  // 24
```

---

## Inheritance — `extends`

```javascript
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    // inherits speak()
}

let dog = new Dog();
dog.speak(); // Animal makes a sound
```

---

## `super()` — Call Parent Constructor

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // calls Animal's constructor
        this.breed = breed;
    }
}

let d = new Dog("Max", "German Shepherd");
console.log(d); // Dog { name: "Max", breed: "German Shepherd" }
```

---

## Static Methods

Belong to the **class itself**, not to instances.

```javascript
class MathHelper {
    static square(num) { return num * num; }
}

console.log(MathHelper.square(5)); // 25
// new MathHelper().square(5)      // ERROR - can't call on instance
```

---

## Getters & Setters

```javascript
class User {
    constructor(name) { this._name = name; }

    get name()      { return this._name; }
    set name(value) { this._name = value; }
}

let user = new User("Kevin");
console.log(user.name); // Kevin
user.name = "John";
console.log(user.name); // John
```

---

## Classes Quick Reference

| Concept | Purpose |
|---------|---------|
| `class` | Blueprint for objects |
| `constructor` | Initialize properties |
| methods | Functions inside a class |
| `extends` | Inherit from another class |
| `super()` | Call parent constructor |
| `static` | Method on the class itself |
| `get` / `set` | Control property access |

---

## Classes — Quiz

**Quiz 1** — What will this output?

```javascript
class Car {
    constructor(brand) { this.brand = brand; }
}
let c = new Car("Toyota");
console.log(c.brand);
```

---

**Quiz 2** — What will this print?

```javascript
class Test {
    sayHello() { console.log("Hello"); }
}
let t = new Test();
t.sayHello();
```

---

**Quiz 3** — Fix the error.

```javascript
class Person {
    constructor(name)   // missing {
        this.name = name;
}
```

---

**Quiz 4** — Create an object from this class.

```javascript
class Student {
    constructor(name, course) {
        this.name = name;
        this.course = course;
    }
}
```

---

## Classes — Coding Challenges

**Challenge 1 — Car Class**

Create a class with `brand`, `model`, `year` and a `getDetails()` method.
Expected: `Toyota Corolla 2024`

**Challenge 2 — Bank Account**

```
Class: BankAccount
Properties: owner, balance
Methods: deposit(amount), withdraw(amount)
```

**Challenge 3 — Rectangle Area**

```
Class: Rectangle
Properties: width, height
Method: area()
Expected: Area = 50
```

---

## Real World — User System

```javascript
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    login() {
        console.log(this.username + " logged in");
    }
}

let user1 = new User("kevin123", "kevin@email.com");
user1.login(); // kevin123 logged in
```
