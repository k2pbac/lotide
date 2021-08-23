const {assertObjectsEqual} = require("../exercises/assertObjectsEqual");

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

console.log(assertObjectsEqual({person: "jim", age: 24}, {person: "jimmy", age: 23})); //Should fail

console.log(assertObjectsEqual({apple: 3, orange: 4, banana: 5}, {apple: 3, orange: 4, banana: 5})); //Should pass