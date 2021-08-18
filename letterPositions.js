// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected && typeof actual !== 'object' && typeof expected !== 'object') {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (typeof actual === 'object' && typeof expected === 'object' && !Array.isArray(actual) && !Array.isArray(expected)) {
    for (let el in actual) {
      if (Array.isArray(actual[el]) && Array.isArray(expected[el])) {
        for (let subEl of actual[el]) {
          if (actual[el][subEl] !== expected[el][subEl]) {
            return console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
          }
        }
        return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
      }
      if (actual[el] !== expected[el]) {
        return console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
      }
    }
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (typeof expected === 'object' && Array.isArray(actual) && Array.isArray(expected)) {
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



const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here

  let newSentence = sentence.trim().toLowerCase();

  for (let i = 0; i < newSentence.length; i++) {
    if (Object.prototype.hasOwnProperty.call(results, newSentence[i])) {
      results[newSentence[i]].push(i);
    } else {
      results[newSentence[i]] = [i];
    }
  }

  return results;
};


console.log(assertEqual(letterPositions("hello"), {h: [0], e: [1], l: [2, 3], o: [4]})); //Should pass
console.log(assertEqual(letterPositions("lighthouse in the house"), {
  l: [0], i: [1, 11], g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
})); // Should pass


console.log(assertEqual(letterPositions("today"), {t: [2], o: [1], d: [2], a: [3], y: [4]})); //Should fail