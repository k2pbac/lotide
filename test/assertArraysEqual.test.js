const {assertArraysEqual} = require("../assertArraysEqual");

console.log(assertArraysEqual([1,2,3], ['1',2,3])); // returns false
console.log(assertArraysEqual([1,2,3], [1,2,3])); // returns true

console.log(assertArraysEqual([1,2,3], [3,2,1])); //returns false
console.log(assertArraysEqual(['2',2,3], ['1',{hello: 1, bye: 2},3])); // returns true

