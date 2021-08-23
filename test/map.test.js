const {map } = require("../exercises/map");
const {eqArraysRecursive} = require("../exercises/eqArraysRecursive");

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.toUpperCase());
const results3 = map(words, word => word.split(''));

console.log(eqArraysRecursive(results1, [ 'g', 'c', 't', 'm', 't' ]));
console.log(eqArraysRecursive(results2, [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ]));
console.log(eqArraysRecursive(results3, [
  [ 'g', 'r', 'o', 'u', 'n', 'd' ],
  [
    'c', 'o', 'n',
    't', 'r', 'o',
    'l'
  ],
  [ 't', 'o' ],
  [ 'm', 'a', 'j', 'o', 'r' ],
  [ 't', 'o', 'm' ]
]));