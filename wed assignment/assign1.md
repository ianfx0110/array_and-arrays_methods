# JavaScript Assessment — 30 Questions

> Topics: **JSON · Classes · Sets · Dates · Switch · Numbers · Advanced Challenges**

---

## Section 1 — JSON

**Question 1**

Convert the following JavaScript object into JSON. Use the correct method and store the result in `jsonStudent`.

```javascript
let student = {
  name: "Ian",
  age: 22,
  course: "Web Development",
};
```

---

**Question 2**

Convert the following JSON string into a JavaScript object and print the `country`.

```javascript
let jsonData = '{"name":"Kevin","country":"Kenya"}';
```

---

**Question 3**

Given the JSON data below, print the `city`.

```javascript
let data = `{
  "user": {
    "name": "John",
    "address": {
      "city": "Eldoret",
      "country": "Kenya"
    }
  }
}`;
```

---

**Question 4**

The JSON below contains an array of students. Print the name of the **second** student.

```javascript
let json = `{
  "students": [
    {"name":"John"},
    {"name":"Jane"},
    {"name":"Mary"}
  ]
}`;
```

---

## Section 2 — Classes

**Question 5**

Create a class called `Person` with properties `name` and `age`, and a method `introduce()`.

> Expected output: `Hello my name is Kevin and I am 25 years old`

---

**Question 6**

Create a `Car` class with properties `brand`, `model`, `year` and a method `carInfo()`.

> Expected output: `Toyota Corolla 2024`

---

**Question 7**

Create a `Rectangle` class with properties `width` and `height` and a method `area()`.

> Expected output: `Area = 40`

---

**Question 8**

Create a parent class `Animal` with a method `speak()`. Create a child class `Dog` that inherits from `Animal`. Call `speak()` from a `Dog` object.

---

## Section 3 — Sets

**Question 9**

Create a Set with the values `1, 2, 3, 3, 4, 4, 5`. Print the set and explain what happens to duplicates.

---

**Question 10**

Add `"apple"`, `"banana"`, and `"mango"` into a Set. Then check if `"banana"` exists.

---

**Question 11**

Convert the following array into a Set to remove duplicates.

```javascript
let numbers = [5, 6, 6, 7, 8, 8, 9];
```

---

**Question 12**

Loop through the following set and print each value.

```javascript
let colors = new Set(["red", "blue", "green"]);
```

---

## Section 4 — Dates

**Question 13**

Create a `Date` object for the current date and time. Print the result.

---

**Question 14**

Create a date for **15 August 2030**. Print the year, month, and day separately.

---

**Question 15**

Write code that prints today's date in the format `DD/MM/YYYY`.

> Example: `10/03/2026`

---

**Question 16**

Calculate the number of days between `2026-03-01` and `2026-03-10`.

---

## Section 5 — Switch Case

**Question 17**

Write a switch statement that prints the day of the week based on a number.

```javascript
let day = 3;
// Expected output: Wednesday
```

---

**Question 18**

Create a switch case for a simple calculator that handles `+`, `-`, `*`, `/`.

```javascript
// Example: 5 + 3 -> 8
```

---

## Section 6 — Numbers

**Question 19**

Use Number methods to round `5.6789` and print:

```
6       <- Math.round()
5.68    <- toFixed(2)
```

---

**Question 20**

Write a program that:

1. Takes the string `"100"`
2. Converts it to a number
3. Adds `50`
4. Prints the result

> Expected output: `150`

---

## Bonus Challenge — Integrated Concepts

Create a **Student Class System** that:

- Uses a **Class** to create students
- Stores student data in **JSON** format
- Uses a **Set** to store unique student IDs
- Records the registration date using **Date**

**Example student:**

```
ID: 101
Name: Kevin
Course: JavaScript
Registered: 2026-03-10
```

---

---

## Section 7 — Advanced Challenges (Sets, References & Theory)

---

**Question 21 — The Inventory Matcher & Reference Equality**

**Coding Task:**

Write a function `matchInventories(invA, invB)` that takes two arrays of strings representing items. Combine both arrays into a single `Set` to find the unique items. Return an object with two properties:

- `totalUnique` — the number of unique items
- `isIdentical` — a boolean checking if the original arrays are exactly the same

```javascript
// Example
matchInventories(["pen", "book"], ["pen", "book"]);
// Expected: { totalUnique: 2, isIdentical: true }
```

**Theory Question:**

Why can't you simply use `invA == invB` or `invA === invB` to determine if two arrays contain the exact same items?

---

**Question 22 — The Score Aggregator & Object Key Coercion**

**Coding Task:**

Write a function `aggregateScores(scoreArray)` that takes an array of mixed data types (e.g., `[10, "10", 20]`). Use a `Set` to track unique stringified versions of the scores. Return an object where the keys are the scores and the values are how many times each appeared.

```javascript
// Example
aggregateScores([10, "10", 20]);
// Expected: { "10": 2, "20": 1 }
```

**Theory Question:**

If your array is `[10, "10"]`, your returned object will likely show `{ "10": 2 }`. Why does JavaScript combine the number `10` and the string `"10"` when using them as object keys?

---

**Question 23 — The Username Sanitizer & String Immutability**

**Coding Task:**

Write a function `sanitizeUsernames(users)` that takes an array of user objects (e.g., `{ id: 1, name: "  alice " }`). Loop through the array, trim whitespace from names, and capitalize the first letter. Store the valid unique names in a `Set` and return an array of those unique names.

```javascript
// Example
sanitizeUsernames([
  { id: 1, name: "  alice " },
  { id: 2, name: "alice" },
]);
// Expected: ["Alice"]
```

**Theory Question:**

When trying to capitalize the first letter, why does `name[0] = "A"` fail to change the string, requiring you to use methods like `slice()` or `substring()` instead?

---

**Question 24 — The Tag Filter & Pass-by-Reference Mutation**

**Coding Task:**

Write a function `addDefaultTags(posts, newTag)` that takes an array of post objects (e.g., `{ title: "JS", tags: ["code"] }`) and a string `newTag`. Add the `newTag` to each post's `tags` array only if it isn't already there — use a `Set` to check. Return the updated array.

```javascript
// Example
addDefaultTags([{ title: "JS", tags: ["code"] }], "javascript");
// Expected: [{ title: "JS", tags: ["code", "javascript"] }]
```

**Theory Question:**

If you modify the `tags` array inside the objects of the `posts` array, the original array passed into the function is also modified. Why does this happen, and how is it different from passing a simple string into a function?

---

**Question 25 — The Config Merger & Falsy Fallbacks**

**Coding Task:**

Write a function `buildConfig(userConfig)` that takes an object. Return a new object combining default settings `({ theme: "light", retries: 3 })` with `userConfig`. Extract the `theme` string into an array of its characters, remove duplicates using a `Set`, and attach that as a `themeChars` property.

```javascript
// Example
buildConfig({ theme: "dark", retries: 0 });
// Expected: { theme: "dark", retries: 0, themeChars: ["d", "a", "r", "k"] }
```

**Theory Question:**

When setting the `retries` value, explain the critical difference between:

```javascript
userConfig.retries || 3; // logical OR
userConfig.retries ?? 3; // nullish coalescing
```

...if the user explicitly passes `0` as their retry count.

---

**Question 26 — The Event Emitter & Closures**

**Coding Task:**

Write a function `createEventManager()` that returns an object with two methods:

- `trigger(eventName)` — adds the string to an internal array and a `Set` of unique events
- `getEvents()` — returns the full array of triggered events

```javascript
// Example
const em = createEventManager();
em.trigger("click");
em.trigger("hover");
em.trigger("click");
console.log(em.getEvents()); // ["click", "hover", "click"]
```

**Theory Question:**

The internal array and `Set` are declared inside `createEventManager()` but outside the returned object. Why can the returned methods still access them, and why can't outside code access them directly?

---

**Question 27 — The Data Deduplicator & Set Optimization**

**Coding Task:**

Write a function `intersectArrays(arr1, arr2)` that takes two arrays of strings. Return a new array containing only the elements that exist in **both** arrays. Convert `arr1` into a `Set` and use array methods on `arr2` to find the matches.

```javascript
// Example
intersectArrays(["a", "b", "c"], ["b", "c", "d"]);
// Expected: ["b", "c"]
```

**Theory Question:**

Why is converting `arr1` to a `Set` and using `Set.has()` generally more performant for large datasets than using `Array.includes()` on every lookup?

---

**Question 28 — The Price Formatter & Type Checking**

**Coding Task:**

Write a function `formatCart(cartArray)` that processes an array of mixed items. If an item is a string (e.g., `"15.99"`), convert it to a number. If it's an object, extract its `price` property. Use a `Set` to ensure only unique prices are summed. Return the total.

```javascript
// Example
formatCart(["15.99", { price: 20 }, "15.99"]);
// Expected: 35.99
```

**Theory Question:**

When checking types, `typeof item === 'string'` works well for strings and numbers, but fails to distinguish between arrays and plain objects. Why, and what should you use instead to tell them apart?

---

**Question 29 — The Value Swapper & Destructuring**

**Coding Task:**

Write a function `swapCoordinates(pointObj)` that takes an object `{ x: 10, y: 20 }`. Create a new object with `x` and `y` swapped, convert the values to a comma-separated string, store the string in an array, and return the array.

```javascript
// Example
swapCoordinates({ x: 10, y: 20 });
// Expected: ["20,10"]
```

**Theory Question:**

If you use ES6 destructuring like `const { x, y } = pointObj`, are `x` and `y` references to the original object's properties, or independent variables? How does modifying `x` affect `pointObj`?

---

**Question 30 — The Role Manager & Set Operations**

**Coding Task:**

Write a function `updateRoles(userObj, rolesArray)` that takes a user object and an array of new role strings. The `userObj` already has a `roles` property which is a `Set`. Add the new roles to the `Set`, delete `"guest"` if it exists, and return a summary string using template literals showing the total number of roles.

```javascript
// Example
const user = { name: "Kevin", roles: new Set(["guest", "viewer"]) };
updateRoles(user, ["editor", "admin"]);
// Expected: "Kevin has 3 roles: viewer, editor, admin"
```

**Theory Question:**

Sets do not have `.map()` or `.reduce()` like arrays do. Why are Sets designed without index-based methods, and how do you work around this when you need to transform the data?
