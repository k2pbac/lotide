const eqArrays = (arr1, arr2) => {


  if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(`Sorry these arrays don't match at index ${i}`);
        console.log(arr1[i]);
        console.log(arr2[i]);

        return false;
      } else {
        console.log(`Both value and type are the same at index ${i}`);
      }
    }
    return true;
  }

  return false;
};


const assertArraysEqual = (actual, expected) => {

  if (eqArrays(actual, expected)) {
    return console.log(`✅✅✅ Assertion Passed`);
  } else {
    return console.log(`😡😡😡 Assertion Failed`);
  }

};

const middle = (arr) => {

  if (Array.isArray(arr)) {
    if (arr.length <= 1 && arr.length >= 0) {
      return [];
    } else if (arr.length % 2 !== 0) {
      return [arr[Math.floor(arr.length / 2)]];
    } else {
      return [arr[Math.floor((arr.length / 2)) - 1], arr[Math.floor(arr.length / 2)]];
    }
  }
  return [];
};

console.log(assertArraysEqual(middle([]), []));


console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // => [2] - Should pass
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [5])); // => [3] - Should fail


console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2,3])); // => [2, 3] - Should pass
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4])); // => [1, 4] - Should fail


console.log(assertArraysEqual(middle([1,2,4,"hello","abc",8]), [4, "hello"])); // => [4, "hello"] Should pass
console.log(assertArraysEqual(middle([{person: "Jerry", age: 25}, {person: "Manny", age: 25}, {person: "Kris", age: 99}]), [{person: "Manny", age: 25}])); // => [{person: "Manny", age: 25}] should Fail because different address for reference in memory to object