const eqObjects = function(actual, expected) {
  if (typeof actual === 'object' && typeof expected === 'object' && !Array.isArray(actual) && !Array.isArray(expected)) {
    for (let el in actual) {
      if (actual[el] !== expected[el]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};


console.log(eqObjects({person: "jim", age: 24}, {person: "jimmy", age: 23})); //Should fail

console.log(eqObjects({apple: 3, orange: 4, banana: 5}, {apple: 3, orange: 4, banana: 5})); //Should pass