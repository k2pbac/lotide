const {without} = require("../exercises/without");
const {assertArraysEqual} = require("../exercises/assertArraysEqual");


console.log(assertArraysEqual(without([1,2,3], [1,2]), [3])); // should be [3];
console.log(assertArraysEqual(without(['bob', 'Bob', 'Mirror', 'MirRor'], ['bob','Mirror']), ['Bob','MirRor']));
console.log(assertArraysEqual(without([1,2,3], [1]), [3])); // should be [2,3] FAIL;
console.log(assertArraysEqual(without(['bob', 'Bob', 'Mirror', 'MirRor'], ['bob','Mirror']), ['Bob','Mirror']));
