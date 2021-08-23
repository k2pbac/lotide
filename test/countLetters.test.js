const {countLetters} = require("../exercises/countLetters");
const {assertObjectsEqual} = require("../exercises/assertObjectsEqual");


console.log(assertObjectsEqual(countLetters("I Like to eat at Burger King"), {i: 3, l: 1, k: 2, e: 3, t: 3, o: 1, a: 2, b: 1, u: 1, r: 2, g: 2, n: 1})); // Should pass tests

console.log(assertObjectsEqual(countLetters("WhatIsMyname?"), {w: 1, h: 1, a: 2, t: 1, i: 1, s: 1, m: 2, y: 1, n: 1, e: 1, '?': 1})); // Should pass tests

console.log(assertObjectsEqual(countLetters("hello"), {h: 2, e:2, l: 1, o: 2})); // Should fail
