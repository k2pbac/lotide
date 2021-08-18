const eqArrays = function(actual, expected) {
  if (actual === expected && typeof actual !== 'object' && typeof expected !== 'object') {
    return true;
  } else if (typeof actual === 'object' && typeof expected === 'object' && !Array.isArray(actual) && !Array.isArray(expected)) {
    for (let el in actual) {
      if (actual[el] !== expected[el]) {
        return false;
      }
    }
    return true;
  } else if (typeof actual === 'object' && typeof expected === 'object' && Array.isArray(actual) && Array.isArray(expected)) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};


const assertArraysEqual = (actual, expected) => {

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {

  const results = {};


  for (const item of allItems) {
    if (itemsToCount[item] === true && Object.prototype.hasOwnProperty.call(results, item)) {
      results[item] += 1;
    } else if (itemsToCount[item] === true) {
      results[item] = 1;
    }
  }
  return results;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertArraysEqual(result1["Jason"], 1);
assertArraysEqual(result1["Karima"], undefined);
assertArraysEqual(result1["Fang"], 2);
assertArraysEqual(result1["Agouhanna"], undefined);