let names = ["Alice", "Bob", "Charlie", "David", "Eve"];

console.log(names[4]);
names.push("Frank"); //adds a new element to the end of the array
console.log(names);
names.pop(); //removing the last element in the array
console.log(names);

console.log(names[0]);

names.unshift("Grace"); //adds a new element to the beginning of the array
console.log(names);

// names.shift(); //removing the first element in the array
console.log(names[0]);

names.includes("Charlie"); //returns true if the array contains the specified element
console.log(names.includes("Charlie"));
names.indexOf("David"); //returns the index of the first occurrence of the specified element
console.log(names.indexOf("David"));


//check what below arrays methods do and how they work
// reverse(), 
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
numbers.sort(); //sorts the elements of the array in place and returns the sorted array
console.log(numbers);

// 
//sort(), slice(), splice(), concat(), join(), map(), filter(), reduce(),  toString(), valueOf()

// check the sort methods, search methods, iteration methods, array reference methods.
//create one array and apply the methods i.e. sort methods, search methods etc 