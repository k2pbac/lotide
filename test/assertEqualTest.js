
const assertEqual = require("../exercises/assertEqual");

console.log(assertEqual("here", "here", true)); // => true
console.log(assertEqual("The bark tree", "The bark trees", false)); // => false

console.log(assertEqual(1234, 1234, true)); // => true
console.log(assertEqual(5+6, 12, false)); // => false

console.log(assertEqual("peopleAreGood", "PeopleAregood", true)); // => should fail (case sensitive)
console.log(assertEqual("People are Bad", "People are Great!", false)); // => false
