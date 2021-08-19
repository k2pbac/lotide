
const eqObjects = function(actual, expected) {

  let actualKeys = Object.keys(actual);

  if (Object.keys(expected).length === Object.keys(actual).length) {

    if (typeof actual === 'object' && typeof expected === 'object' && !Array.isArray(actual) && !Array.isArray(expected)) {
   
      for (let key of actualKeys) {
        if (Object.prototype.hasOwnProperty.call(expected, key)) {
          if (expected[key] !== actual[key] && !Array.isArray(expected[key]) && !Array.isArray(actual[key])) {
            return false;
          } else if (expected[key] !== actual[key] && Array.isArray(expected[key]) && Array.isArray(actual[key])) {
            for (let el of actual[key]) {
              if (!expected[key].includes(el)) {
                return false;
              }
            }
          }
        }
      }
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};





// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, ba),true); // => true
assertEqual(eqObjects(ab, abc),false); // => false