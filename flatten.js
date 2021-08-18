
const eqArrays = (arr1, arr2) => {


  if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(`Sorry these arrays don't match at index ${i}`);
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
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`😡😡😡 Assertion Failed`);
  }

};


const flatten = (arr) => {
  const newArr = [];
  const recArray = (arr) => {

    if (Array.isArray(arr) && arr.length) {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          recArray(arr[i]);
        } else {
          newArr.push(arr[i]);
        }
      }
    }
  };
  recArray(arr);
  return newArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]));

