// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected && typeof actual !== 'object' && typeof expected !== 'object') {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (typeof actual === 'object' && typeof expected === 'object' && !Array.isArray(actual) && !Array.isArray(expected)) {
    for (let el in actual) {
      if (actual[el] !== expected[el]) {
        return console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
      }
    }
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (typeof actual === 'object' && typeof expected === 'object' && Array.isArray(actual) && Array.isArray(expected)) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
      }
    }
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (sentence) => {

  const results = {};
  const newSentence = sentence.replaceAll(" ", "").toLowerCase();

  for (let letter of newSentence) {
    if (Object.prototype.hasOwnProperty.call(results, letter)) {
      results[letter]++;
    } else {
      results[letter] = 1;
    }
  }

  return results;
};


console.log(assertEqual(countLetters("I Like to eat at Burger King"), {i: 3, l: 1, k: 2, e: 3, t: 3, o: 1, a: 2, b: 1, u: 1, r: 2, g: 2, n: 1})); // Should pass tests

console.log(assertEqual(countLetters("WhatIsMyname?"), {w: 1, h: 1, a: 2, t: 1, i: 1, s: 1, m: 2, y: 1, n: 1, e: 1, '?': 1})); // Should pass tests

console.log(assertEqual(countLetters("hello"), {h: 2, e:2, l: 1, o: 2})); // Should fail
