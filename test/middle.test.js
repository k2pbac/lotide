const {assertArraysEqual} = require("../assertArraysEqual");
const {middle} = require("../middle");

console.log(assertArraysEqual(middle([]), []));


console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // => [2] - Should pass
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [5])); // => [3] - Should fail


console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2,3])); // => [2, 3] - Should pass
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4])); // => [1, 4] - Should fail


console.log(assertArraysEqual(middle([1,2,4,"hello","abc",8]), [4, "hello"])); // => [4, "hello"] Should pass
console.log(assertArraysEqual(middle([{person: "Jerry", age: 25}, {person: "Manny", age: 25}, {person: "Kris", age: 99}]), [{person: "Manny", age: 25}])); // => [{person: "Manny", age: 25}] should Fail because different address for reference in memory to object