
const eqArrays = (arr1, arr2) => {

  let arrEquality = true;

  if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(`Array1 value: ${arr1[i]}, Array1 type: ${typeof arr1[i]}`);
        console.log(`Array2 value: ${arr2[i]}, Array2 type: ${typeof arr2[i]}`);
        console.log(`Sorry these values/types don't match at index ${i}`);
        arrEquality = false;
      } else {
        console.log(`Both value and type are the same at index ${i}`);
      }
    }
  }

  return arrEquality;
};


const assertArraysEqual = (actual, expected) => {

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`😡😡😡 Assertion Failed`);
  }

};

console.log(assertArraysEqual([1,2,3], ['1',2,3]));
// console.log(assertArraysEqual([1,2,3], [1,2,3]));

// console.log(assertArraysEqual([1,2,3], [3,2,1]));
// console.log(assertArraysEqual(['2',2,3], ['1',{hello: 1, bye: 2},3]));

