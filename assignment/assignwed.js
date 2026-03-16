// Q1: Convert the object into JSON and store in jsonStudent
let student = {
name: "Ian",
age: 22,
course: "Web Development",
};
let jsonStudent = JSON.stringify(student);

// Q2: Convert JSON string to object and print country
let jsonData = '{"name":"Kevin","country":"Kenya"}';
let obj2 = JSON.parse(jsonData);
console.log(obj2.country);

// Q3: Print the city from the JSON
let data = `{
  "user": {
    "name": "John",
    "address": {
      "city": "Eldoret",
      "country": "Kenya"
    }
  }
}`;
let obj3 = JSON.parse(data);
console.log(obj3.user.address.city);

// Q4: Print the name of the second student
let json = `{
  "students": [
    {"name":"John"},
    {"name":"Jane"},
    {"name":"Mary"}
  ]
}`;
let obj4 = JSON.parse(json);
console.log(obj4.students[1].name);

// Q5: Create Person class with introduce()
class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

introduce() {
console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
}
}

let p = new Person("Kevin", 25);
p.introduce();

// Q6: Car class
class Car {
constructor(brand, model, year) {
this.brand = brand;
this.model = model;
this.year = year;
}

carInfo() {
console.log(`${this.brand} ${this.model} ${this.year}`);
}
}

let car = new Car("Toyota", "Corolla", 2024);
car.carInfo();

// Q7: Rectangle class area
class Rectangle {
constructor(width, height) {
this.width = width;
this.height = height;
}

area() {
console.log("Area = " + this.width * this.height);
}
}

let r = new Rectangle(5, 8);
r.area();

// Q8: Inheritance Animal -> Dog
class Animal {
speak() {
console.log("Animal makes sound");
}
}

class Dog extends Animal {}

let d = new Dog();
d.speak();

// Q9: Create set and show duplicate removal
let set1 = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log(set1);

// Q10: Add fruits and check banana
let fruits = new Set();
fruits.add("apple");
fruits.add("banana");
fruits.add("mango");
console.log(fruits.has("banana"));

// Q11: Convert array to set to remove duplicates
let numbers = [5, 6, 6, 7, 8, 8, 9];
let uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers);

// Q12: Loop through set
let colors = new Set(["red", "blue", "green"]);
for (let color of colors) {
console.log(color);
}

// Q13: Current date and time
let now = new Date();
console.log(now);

// Q14: Date 15 August 2030
let date = new Date("2030-08-15");
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());

// Q15: Print date as DD/MM/YYYY
let today = new Date();
let day = String(today.getDate()).padStart(2, "0");
let month = String(today.getMonth() + 1).padStart(2, "0");
let year = today.getFullYear();
console.log(`${day}/${month}/${year}`);

// Q16: Days difference
let d1 = new Date("2026-03-01");
let d2 = new Date("2026-03-10");
let diff = d2 - d1;
let days = diff / (1000 * 60 * 60 * 24);
console.log(days);

// Q17: Day of week using switch
let dayNum = 3;

switch (dayNum) {
case 1:
console.log("Monday");
break;
case 2:
console.log("Tuesday");
break;
case 3:
console.log("Wednesday");
break;
default:
console.log("Invalid day");
}

// Q18: Simple calculator
let a = 5;
let b = 3;
let op = "+";

switch (op) {
case "+":
console.log(a + b);
break;
case "-":
console.log(a - b);
break;
case "*":
console.log(a * b);
break;
case "/":
console.log(a / b);
break;
}

// Q19: Rounding numbers
console.log(Math.round(5.6789));
console.log((5.6789).toFixed(2));

// Q20: Convert string to number and add 50
let str = "100";
let num = Number(str);
console.log(num + 50);

// Q21: Inventory matcher
function matchInventories(invA, invB) {
let set = new Set([...invA, ...invB]);

let identical = JSON.stringify(invA) === JSON.stringify(invB);

return {
totalUnique: set.size,
isIdentical: identical,
};
}

// Q22: Score aggregator
function aggregateScores(arr) {
let result = {};

arr.forEach((score) => {
let key = String(score);
result[key] = (result[key] || 0) + 1;
});

return result;
}

// Q23: Username sanitizer
function sanitizeUsernames(users) {
let set = new Set();

users.forEach((u) => {
let name = u.name.trim();
name = name[0].toUpperCase() + name.slice(1);

```
set.add(name);
```

});

return [...set];
}

// Q24: Add default tags
function addDefaultTags(posts, newTag) {
posts.forEach((post) => {
let tagSet = new Set(post.tags);

```
if (!tagSet.has(newTag)) {
  post.tags.push(newTag);
}
```

});

return posts;
}

// Q25: Config builder
function buildConfig(userConfig) {
let theme = userConfig.theme ?? "light";
let retries = userConfig.retries ?? 3;

let chars = [...new Set(theme.split(""))];

return {
theme,
retries,
themeChars: chars,
};
}

// Q26: Event manager with closure
function createEventManager() {
let events = [];
let unique = new Set();

return {
trigger(name) {
events.push(name);
unique.add(name);
},

```
getEvents() {
  return events;
},
```

};
}

// Q27: Array intersection
function intersectArrays(arr1, arr2) {
let set = new Set(arr1);

return arr2.filter((x) => set.has(x));
}

// Q28: Format cart prices
function formatCart(cart) {
let prices = new Set();

cart.forEach((item) => {
if (typeof item === "string") {
prices.add(Number(item));
} else if (typeof item === "object") {
prices.add(item.price);
}
});

let total = 0;
prices.forEach((p) => (total += p));

return total;
}

// Q29: Swap coordinates
function swapCoordinates(point) {
let { x, y } = point;

let swapped = `${y},${x}`;

return [swapped];
}

// Q30: Role manager
function updateRoles(user, rolesArray) {
rolesArray.forEach((r) => user.roles.add(r));

user.roles.delete("guest");

return `${user.name} has ${user.roles.size} roles: ${[...user.roles].join(", ")}`;
}
