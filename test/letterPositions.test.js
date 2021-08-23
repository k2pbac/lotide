const {assertObjectsEqual} = require("../assertObjectsEqual");
const {letterPositions} = require("../letterPositions");

console.log(assertObjectsEqual(letterPositions("hello"), {h: [0], e: [1], l: [2, 3], o: [4]})); //Should pass
console.log(assertObjectsEqual(letterPositions("lighthouse in the house"), {
  l: [0], i: [1, 11], g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
})); // Should pass


console.log(assertObjectsEqual(letterPositions("today"), {t: [2], o: [1], d: [2], a: [3], y: [4]})); //Should fail