/********************************************************************
 JAVASCRIPT ARRAYS – COMPLETE GUIDE (WEB DEV FOCUSED)
********************************************************************/

/********************************************************************
 1️⃣ WHAT IS AN ARRAY?
 - An ordered collection of values
 - Indexed starting at 0
 - A reference type (stored by reference in memory)
********************************************************************/

const arrExample = [10, "Kevin", true, { role: "dev" }];

console.log("Full Array:", arrExample);
console.log("First Element:", arrExample[0]);
console.log("Array Length:", arrExample.length);


/********************************************************************
 2️⃣ REFERENCE BEHAVIOR (IMPORTANT)
 Arrays are reference types. Assigning one array to another variable
 does NOT create a copy — both point to the same memory.
********************************************************************/

const a = [1, 2, 3];
const b = a;

b.push(4);

console.log("Original a after modifying b:", a);
console.log("b:", b);


/********************************************************************
 SAFE COPY USING SPREAD OPERATOR
********************************************************************/

const original = [1, 2, 3];
const copy = [...original];

copy.push(4);

console.log("Original after safe copy:", original);
console.log("Copied array:", copy);


/********************************************************************
 3️⃣ SEARCH METHODS
********************************************************************/

/* indexOf(value, startIndex)
   Returns first index of value or -1 if not found.
*/

const numbersSearch = [10, 20, 30, 20];

console.log("indexOf 20:", numbersSearch.indexOf(20));
console.log("indexOf 20 from index 2:", numbersSearch.indexOf(20, 2)); // look for the value 20  and start searching from index 2
console.log("indexOf 100:", numbersSearch.indexOf(100));


/* lastIndexOf(value)
   Searches from right side.
*/

console.log("lastIndexOf 20:", numbersSearch.lastIndexOf(20));


/* includes(value, startIndex)
   Returns true or false.
*/

console.log("includes 20:", numbersSearch.includes(20));
console.log("includes 100:", numbersSearch.includes(100));

console.log("NaN with includes:", [NaN].includes(NaN));
console.log("NaN with indexOf:", [NaN].indexOf(NaN));


/* find(callback)
   Returns first matching element.
*/

const usersSearch = [
  { id: 1, name: "Kevin" },
  { id: 2, name: "John" }
];


const foundUser = usersSearch.find(u => u.id === 2);
console.log("find user with id 2:", foundUser);


/* findIndex(callback)
   Returns index of matching element.
*/

const foundIndex = usersSearch.findIndex(u => u.id === 2);
console.log("findIndex user id 2:", foundIndex);


/********************************************************************
 4️⃣ ITERATION METHODS
********************************************************************/

/* forEach()
   Executes function for each element.
   Does NOT return a new array.
*/

const numbersIteration = [1, 2, 3];

numbersIteration.forEach((num, index) => {
  console.log("forEach value:", num);
  console.log("forEach index:", index);
});


/* map()
   Returns a NEW transformed array. It allows you to transform every element in an array and creates a brand-new array with the results, leaving the original array untouched.
*/

const doubled = numbersIteration.map(num => num * 2);

console.log("Mapped (doubled):", doubled);
console.log("Original after map:", numbersIteration);


/* filter()
   Returns array of elements that match condition.
*/

const evens = [1, 2, 3, 4, 5].filter(num => num % 2 === 0);
console.log("Filtered evens:", evens);

// create an array with 20 numbers and filter out the prime numbers from the array and print the prime numbers in the console
const isPrime = num => {
  if (num <= 1) return false;
   for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const numbers20 = Array.from({ length: 20 }, (_, i) => i + 1);
const primeNumbers = numbers20.filter(isPrime);
console.log("Prime numbers from 1 to 20:", primeNumbers);



/* some()
   Returns true if ANY element matches condition.
*/

const someResult = [1, 2, 3].some(num => num > 2);
console.log("Some greater than 2:", someResult);


/* every()
   Returns true if ALL elements match condition.
*/

const everyResult = [1, 2, 3].every(num => num > 0);
console.log("Every greater than 0:", everyResult);


/* reduce()
   Powerful method for accumulating values.
   Syntax:
   array.reduce((accumulator, current) => {}, initialValue) //initialValue is optional, if not provided, first element is used as initial accumulator and iteration starts from second element.
*/

// Sum example
const sum = [10, 20, 30].reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log("Sum using reduce:", sum);


// Count occurrences example
const fruits = ["apple", "banana", "apple", "orange"];

const fruitCount = fruits.reduce((acc, fruit) => {
  if (!acc[fruit]) {
    acc[fruit] = 0;
  }
  acc[fruit]++;
  return acc;  
}, {});

console.log("Fruit count:", fruitCount);


/********************************************************************
 5️⃣ SORTING METHODS
********************************************************************/

/* sort()
   By default sorts as STRINGS.
*/

const numbersSort = [10, 5, 40, 25];

numbersSort.sort();
console.log("Default sort (string):", numbersSort);


/* Numeric ascending sort */

const numbersSortAsc = [10, 5, 40, 25];

numbersSortAsc.sort((a, b) => a - b);
console.log("Numeric ascending sort:", numbersSortAsc);


/* Numeric descending sort */

numbersSortAsc.sort((a, b) => b - a);
console.log("Numeric descending sort:", numbersSortAsc);


/* Sorting objects */

const usersSort = [
  { name: "Kevin", age: 30 },
  { name: "John", age: 25 }
];

usersSort.sort((a, b) => a.age - b.age);
console.log("Sorted users by age:", usersSort);


/* reverse()
   Reverses array (mutates original).
*/

const reverseExample = [1, 2, 3];
reverseExample.reverse();
console.log("Reversed array:", reverseExample);


/********************************************************************
 6️⃣ MUTATION METHODS
********************************************************************/

/* push() - adds to end */

const pushArr = [1, 2];
pushArr.push(3);
console.log("After push:", pushArr);


/* pop() - removes last */

const popArr = [1, 2, 3];
popArr.pop();
console.log("After pop:", popArr);


/* shift() - removes first */

const shiftArr = [1, 2, 3];
shiftArr.shift();
console.log("After shift:", shiftArr);


/* unshift() - adds to beginning */

const unshiftArr = [2, 3];
unshiftArr.unshift(1);
console.log("After unshift:", unshiftArr);


/* splice(start, deleteCount, items...)
   Mutates array.
*/

// Remove element
const spliceRemove = [10, 20, 30];
spliceRemove.splice(1, 1);
console.log("After splice remove:", spliceRemove);


// Insert element
const spliceInsert = [10, 30];
spliceInsert.splice(1, 0, 20);
console.log("After splice insert:", spliceInsert);


// Negative index
const spliceNegative = [10, 20, 30];
spliceNegative.splice(-1, 1);
console.log("After splice negative index:", spliceNegative);


/********************************************************************
 7️⃣ NON-MUTATING METHODS
********************************************************************/

/* slice(start, end)
   Returns new array.
*/

const sliceArr = [10, 20, 30, 40];
const sliced = sliceArr.slice(1, 3);

console.log("Sliced array:", sliced);
console.log("Original after slice:", sliceArr);


/* concat()
   Merges arrays without mutation.
*/

const concatA = [1, 2];
const concatB = [3, 4];

const concatResult = concatA.concat(concatB);
console.log("Concatenated array:", concatResult);


/* flat()
   Flattens nested arrays.
*/

const flatArr = [[1, 2], [3, 4]];
const flattened = flatArr.flat();

console.log("Flattened array:", flattened);


/********************************************************************
 END OF ARRAYS GUIDE
********************************************************************/
