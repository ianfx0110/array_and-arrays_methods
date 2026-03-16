// JSON to Object
let jsonData = '{"name":"John","age":25,"country":"Kenya"}';
let obj = JSON.parse(jsonData);

console.log("Object:", obj);
console.log("Name:", obj.name);


// Object to JSON
let student = {
  name: "Ascer",
  course: "Computer Studies",
  level: "Form 2"
};

let jsonStudent = JSON.stringify(student);

console.log("JSON:", jsonStudent);
