
const eqArrays = (arr1, arr2) => {

  let arrEquality = false;
  
  if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(`Array1 value: ${arr1[i]}, Array1 type: ${typeof arr1[i]}`);
        console.log(`Array2 value: ${arr2[i]}, Array2 type: ${typeof arr2[i]}`);
        console.log(`Sorry these values/types don't match at index ${i}`);
        arrEquality = false;
      } else {
        console.log(`Both value and type are the same at index ${i}`);
        arrEquality = true;
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

const without = (source , itemsToRemove) => {

  let newArr = [];
  if (Array.isArray(source) && Array.isArray(itemsToRemove) && source.length && itemsToRemove.length) {

    for (let x = 0; x < source.length; x++) {
      let contains = false;
      for (let y = 0; y < itemsToRemove.length; y++) {
        if (source[x] === itemsToRemove[y]) {
          contains = true;
        }
      }
      if (contains === false) {
        newArr.push(source[x]);
      }

    }
 
  }
  return newArr;
};

console.log(assertArraysEqual(without([1,2,3], [1,2]), [3])); // should be [3];
console.log(assertArraysEqual(without(['bob', 'Bob', 'Mirror', 'MirRor'], ['bob','Mirror']), ['Bob','MirRor']));
console.log(assertArraysEqual(without([1,2,3], [1]), [3])); // should be [3];
console.log(assertArraysEqual(without(['bob', 'Bob', 'Mirror', 'MirRor'], ['bob','Mirror']), ['Bob','Mirror']));
