/********************************************************************
 JAVASCRIPT OBJECT METHODS – COMPLETE GUIDE (WEB DEV FOCUSED)
********************************************************************/

/********************************************************************
 1. WHAT IS AN OBJECT METHOD?

 A method is simply a function stored as a property inside an object.
 Methods give objects BEHAVIOUR, not just data.

 Two ways to define a method:
   1. Traditional (function keyword)
   2. Shorthand (modern ES6 – preferred)
********************************************************************/

const person = {
  name: "Kevin",

  // traditional syntax
  greetOld: function () {
    console.log("Hello from traditional method!");
  },

  // shorthand syntax (preferred)
  greet() {
    console.log("Hello, I am " + this.name);
  }
};

person.greetOld();   // Hello from traditional method!
person.greet();      // Hello, I am Kevin


/********************************************************************
 2. THE "this" KEYWORD INSIDE METHODS

 "this" refers to the CURRENT OBJECT calling the method.
 Without "this" you cannot access the object's own properties
 from inside a method.
********************************************************************/

const student = {
  name: "Alice",
  grade: "A",
  introduce() {
    // this.name -> refers to the name property of THIS object
    return "My name is " + this.name + " and my grade is " + this.grade;
  }
};

console.log(student.introduce());
// My name is Alice and my grade is A


/********************************************************************
 3. Object.keys(obj)

 Returns an ARRAY of all the property NAMES (keys) of an object.
 Useful when you want to loop through or count the properties.
********************************************************************/

const user = {
  name: "Alice",
  age: 25,
  country: "Kenya"
};

console.log(Object.keys(user));
// ["name", "age", "country"]

// Practical: count how many properties an object has
console.log("Number of properties:", Object.keys(user).length); // 3


/********************************************************************
 4. Object.values(obj)

 Returns an ARRAY of all the property VALUES of an object.
 Same order as Object.keys().
********************************************************************/

console.log(Object.values(user));
// ["Alice", 25, "Kenya"]

// Practical: check if a specific value exists
console.log(Object.values(user).includes("Kenya")); // true


/********************************************************************
 5. Object.entries(obj)

 Returns an array of [key, value] PAIRS (each pair is an array).
 Best for looping through an object when you need BOTH key and value.
********************************************************************/

console.log(Object.entries(user));
// [["name","Alice"], ["age",25], ["country","Kenya"]]

// Practical: loop with destructuring
Object.entries(user).forEach(([key, value]) => {
  console.log(key + ": " + value);
});
// name: Alice
// age: 25
// country: Kenya


/********************************************************************
 6. Object.fromEntries(iterable)

 The REVERSE of Object.entries().
 Converts an array of [key, value] pairs BACK into an object.
 Also works with Map.
********************************************************************/

const entries = [["name", "Bob"], ["age", 30], ["city", "Nairobi"]];

const rebuilt = Object.fromEntries(entries);
console.log(rebuilt);
// { name: "Bob", age: 30, city: "Nairobi" }

// Practical: transform object values
const prices = { apple: 100, mango: 80, banana: 50 };

const discounted = Object.fromEntries(
  Object.entries(prices).map(([item, price]) => [item, price * 0.9])
);
console.log("Discounted prices:", discounted);


/********************************************************************
 7. Object.assign(target, ...sources)

 Copies all properties from one or more source objects INTO a target.
 Returns the modified target object.
 Used for MERGING or CLONING objects.

 WARNING: Shallow copy only (nested objects are still referenced).
********************************************************************/

const defaults = { theme: "light", language: "en", fontSize: 14 };
const userPrefs = { theme: "dark", fontSize: 16 };

// Merge into a new empty object (safe pattern)
const settings = Object.assign({}, defaults, userPrefs);
console.log(settings);
// { theme: "dark", language: "en", fontSize: 16 }

// Clone an object
const original = { x: 1, y: 2 };
const clone = Object.assign({}, original);
clone.x = 99;
console.log("original.x:", original.x); // 1 (not affected)
console.log("clone.x:",    clone.x);    // 99


/********************************************************************
 8. Object.freeze(obj)

 Makes an object COMPLETELY IMMUTABLE:
   - Cannot add new properties
   - Cannot modify existing properties
   - Cannot delete properties
 Returns the same frozen object.
********************************************************************/

const config = {
  apiUrl: "https://api.example.com",
  timeout: 3000
};

Object.freeze(config);

config.timeout = 9999;          // silently ignored
config.newProp = "hello";       // silently ignored
delete config.apiUrl;           // silently ignored

console.log(config);
// { apiUrl: "https://api.example.com", timeout: 3000 }  – unchanged


/********************************************************************
 9. Object.isFrozen(obj)

 Returns TRUE if the object has been frozen with Object.freeze().
 Useful for checking before attempting to modify an object.
********************************************************************/

console.log(Object.isFrozen(config));   // true

const mutable = { a: 1 };
console.log(Object.isFrozen(mutable));  // false


/********************************************************************
 10. Object.seal(obj)

 Partially locks an object:
   - CANNOT add new properties
   - CANNOT delete properties
   - CAN still MODIFY existing properties

 Difference from freeze:  seal allows value changes, freeze does not.
********************************************************************/

const product = {
  name: "Laptop",
  price: 1000
};

Object.seal(product);

product.price = 1200;        // ALLOWED – modifying existing
product.brand = "Dell";      // NOT allowed – adding new property
delete product.name;         // NOT allowed – deleting property

console.log(product);
// { name: "Laptop", price: 1200 }


/********************************************************************
 11. Object.isSealed(obj)

 Returns TRUE if the object has been sealed with Object.seal().
********************************************************************/

console.log(Object.isSealed(product));  // true

const open = { z: 9 };
console.log(Object.isSealed(open));     // false


/********************************************************************
 12. Object.create(proto)

 Creates a NEW object using the given object as its prototype.
 The new object INHERITS all methods of the prototype.
 Foundation of prototype-based inheritance in JavaScript.
********************************************************************/

const animal = {
  speak() {
    console.log(this.name + " makes a sound.");
  }
};

const dog = Object.create(animal);
dog.name = "Rex";
dog.bark = function () {
  console.log(this.name + " says: Woof!");
};

dog.speak();  // Rex makes a sound.  (inherited from animal)
dog.bark();   // Rex says: Woof!     (own method)


/********************************************************************
 13. Object.getPrototypeOf(obj)

 Returns the PROTOTYPE of an object.
 Lets you inspect the prototype chain.
********************************************************************/

console.log(Object.getPrototypeOf(dog) === animal); // true


/********************************************************************
 14. Object.defineProperty(obj, propName, descriptor)

 Defines or modifies a single property with fine-grained control.
 The descriptor can set:
   value       – the property value
   writable    – can the value be changed?
   enumerable  – does it show up in loops / Object.keys?
   configurable – can it be deleted or redefined?
********************************************************************/

const account = {};

Object.defineProperty(account, "id", {
  value: 101,
  writable: false,      // cannot be reassigned
  enumerable: true,     // shows up in Object.keys
  configurable: false   // cannot be deleted or reconfigured
});

account.id = 999;       // silently fails (writable is false)
console.log(account.id); // 101


/********************************************************************
 15. Object.getOwnPropertyNames(obj)

 Returns an array of ALL own property names, including those
 that are non-enumerable (would be skipped by Object.keys).
********************************************************************/

const hidden = {};
Object.defineProperty(hidden, "secret", {
  value: "42",
  enumerable: false  // will NOT appear in Object.keys
});
hidden.visible = "yes";

console.log(Object.keys(hidden));               // ["visible"]
console.log(Object.getOwnPropertyNames(hidden)); // ["secret", "visible"]


/********************************************************************
 16. hasOwnProperty(key)  /  Object.hasOwn(obj, key) [ES2022]

 Checks if a property is a DIRECT own property of the object
 (not inherited from its prototype).

 Object.hasOwn() is the modern and recommended alternative.
********************************************************************/

const car = {
  brand: "Toyota",
  model: "Camry"
};

console.log(car.hasOwnProperty("brand"));   // true
console.log(car.hasOwnProperty("toString")); // false (inherited)

// Modern way (ES2022)
console.log(Object.hasOwn(car, "brand"));   // true
console.log(Object.hasOwn(car, "speed"));   // false


/********************************************************************
 17. THE "in" OPERATOR

 Checks if a property exists in an object OR its prototype chain.
 Returns true even for inherited properties.
 Different from hasOwnProperty which only checks own properties.
********************************************************************/

console.log("brand"    in car);     // true  (own property)
console.log("toString" in car);     // true  (inherited from Object)
console.log("speed"    in car);     // false (does not exist at all)


/********************************************************************
 18. LOOPING THROUGH OBJECTS

 for...in  – iterates over all ENUMERABLE keys (including inherited)
 Best practice: combine with hasOwnProperty to skip inherited keys.
********************************************************************/

const profile = {
  username: "kevin99",
  email: "kevin@mail.com",
  age: 22
};

for (let key in profile) {
  if (profile.hasOwnProperty(key)) {  // skip inherited properties
    console.log(key + " => " + profile[key]);
  }
};
// username => kevin99
// email    => kevin@mail.com
// age      => 22


/********************************************************************
 19. OBJECT DESTRUCTURING

 Extracts properties from an object into individual variables.
 Reduces repetitive object.property access.

 Syntax:  const { key1, key2 } = obj
********************************************************************/

const book = {
  title: "JavaScript Guide",
  author: "Kevin",
  pages: 300,
  published: 2024
};

// Basic destructuring
const { title, pages } = book;
console.log(title);  // JavaScript Guide
console.log(pages);  // 300

// Rename while destructuring
const { author: writerName } = book;
console.log(writerName); // Kevin

// Default value if property is missing
const { rating = "No rating" } = book;
console.log(rating); // No rating


/********************************************************************
 20. NESTED OBJECTS

 Objects can contain other objects as property values.
 Access nested values using chained dot notation or destructuring.
********************************************************************/

const company = {
  name: "TechCorp",
  address: {
    city: "Nairobi",
    country: "Kenya"
  },
  ceo: {
    name: "John",
    age: 45
  }
};

// Dot notation access
console.log(company.address.city);    // Nairobi
console.log(company.ceo.name);        // John

// Nested destructuring
const { address: { city, country }, ceo: { name: ceoName } } = company;
console.log(city, country); // Nairobi Kenya
console.log(ceoName);       // John

// Access using Object.keys on a nested object
console.log(Object.keys(company.address)); // ["city", "country"]


/********************************************************************
 21. ADDING CUSTOM METHODS TO AN OBJECT

 You can give any object its own custom behaviour by adding
 functions as property values. These become the object's methods.
********************************************************************/

const calculator = {
  result: 0,

  add(a, b)      { return a + b; },
  subtract(a, b) { return a - b; },
  multiply(a, b) { return a * b; },
  divide(a, b)   { return b !== 0 ? a / b : "Cannot divide by zero"; },
  power(a, b)    { return Math.pow(a, b); },
};

console.log(calculator.add(5, 3));           // 8
console.log(calculator.subtract(10, 4));     // 6
console.log(calculator.multiply(2, 6));      // 12
console.log(calculator.divide(15, 3));       // 5
console.log(calculator.divide(10, 0));       // Cannot divide by zero
console.log(calculator.power(2, 8));         // 256


/********************************************************************
 SUMMARY – QUICK REFERENCE

 Method / Feature              Purpose
 --------------------------    -----------------------------------------
 Object.keys(obj)              Array of property names
 Object.values(obj)            Array of property values
 Object.entries(obj)           Array of [key, value] pairs
 Object.fromEntries(arr)       Array of pairs -> Object
 Object.assign(target, src)    Copy / merge objects
 Object.freeze(obj)            Make fully immutable
 Object.isFrozen(obj)          Check if frozen
 Object.seal(obj)              Block add/delete, allow modify
 Object.isSealed(obj)          Check if sealed
 Object.create(proto)          New object with given prototype
 Object.getPrototypeOf(obj)    Get prototype of an object
 Object.defineProperty(o,k,d)  Define property with descriptor
 Object.getOwnPropertyNames    All own keys, incl. non-enumerable
 hasOwnProperty(key)           Check own (not inherited) property
 Object.hasOwn(obj, key)       Modern hasOwnProperty alternative
 "key" in obj                  Check property in obj or prototype
 for...in                      Loop through enumerable keys
********************************************************************/