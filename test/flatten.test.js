const {flatten} = require("../exercises/flatten");


console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]));

