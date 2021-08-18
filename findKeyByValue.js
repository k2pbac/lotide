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

const findKeyByValue = (obj, value) => {

  let keys = Object.keys(obj);

  for (let key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (obj[key] === value) {
        return key;
      } else if (Array.isArray(obj[key])) {
        for (let el of obj[key]) {
          if (el === value) {
            return key;
          }
        }
      }
    }
  }


  return undefined;
};



const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  horror: ["Pitch Perfect", "Yes Man"]
};

assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // Should pass
assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // Should pass


assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "comedy"); // Should fail

assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "Pitch Perfect"), "horror"); // Should pass

