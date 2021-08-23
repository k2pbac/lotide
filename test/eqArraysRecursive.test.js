const {eqArraysRecursive} = require("../exercises/eqArraysRecursive");


console.log(eqArraysRecursive([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(eqArraysRecursive([[2, 3], [4]], [[2, 4], [4]])); // => false

console.log(
  eqArraysRecursive(
    [[2, 3], [4]],
    [
      [2, 3],
      [4, 5],
    ]
  )
); // => false
console.log(eqArraysRecursive([[2, 3], [4]], [[2, 3], 4])); // => false

console.log(
  eqArraysRecursive(
    [[2, [2, [3, 5, [5, 6]]], 3], [4]],
    [[2, [2, [3, 5, [5, 6]]], 3], [4]]
  )
); // => true

console.log(eqArraysRecursive([2, 3], [[2, 3], [4]])); // => false

console.log(eqArraysRecursive([[4], [2, 3]], [[2, 3], [4]])); // => false
