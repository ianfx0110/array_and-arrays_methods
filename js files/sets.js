// Creating a Set
let fruits = new Set(["apple", "banana", "orange"]);

console.log(fruits.has("banana")); // true
console.log(fruits.has("grape"));  // false

fruits.delete("banana");

console.log(fruits.size); // size after deletion
console.log(fruits);


// ----------------------------------
// Looping through a Set
let fruits2 = new Set(["apple", "banana", "mango"]);

for (let fruit of fruits2) {
  console.log(fruit);
}

fruits2.forEach((fruit) => {
  console.log(fruit);
});


// ----------------------------------
// Using forEach() with numbers
let numbers = new Set([1, 2, 3, 4, 5]);

numbers.forEach((number) => {
  console.log(number);
});


// ----------------------------------
// Converting a Set to an Array using spread operator
let uniqueNumbers = [...numbers];
console.log(uniqueNumbers);


// ----------------------------------
// Remove duplicate emails from a list
let emails = [
  "user1@example.com",
  "user2@example.com",
  "user1@example.com",
  "user3@example.com",
  "user4@example.com"
];

let uniqueEmails = [...new Set(emails)];
console.log(uniqueEmails);


// ----------------------------------
// Using Set to find common values in arrays
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let commonValues = arr1.filter(value => arr2.includes(value));

console.log(commonValues);