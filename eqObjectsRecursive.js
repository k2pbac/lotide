const eqObjects = function (object1, object2) {
  let keys = Object.keys(object1);

  if (
    typeof object2[keys[0]] === "object" &&
    typeof object1[keys[0]] === "object"
  ) {
    return eqObjects(object1[keys[0]], object2[keys[0]]);
  } else if (object1[keys[0]] !== object2[keys[0]]) {
    return false;
  }

  if (keys.length === 0) {
    return true;
  }

  delete object1[keys[0]];
  delete object2[keys[0]];
  return eqObjects(object1, object2);
};

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// console.log(
//   eqObjects({ person: "jim", age: 24 }, { person: "jimmy", age: 23 })
// ); //Should fail

// console.log(
//   eqObjects(
//     { apple: 3, orange: 4, banana: 5 },
//     { apple: 3, orange: 4, banana: 5 }
//   )
// ); //Should pass

// console.log(
//   eqObjects({ apple: 3, orange: 4, banana: 5 }, [
//     { apple: 3, orange: 4, banana: 5 },
//   ])
// ); //Should fail

// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
// console.log(
//   eqObjects(
//     {
//       a: { z: 1, d: { j: { x: 3, yd: { more: 23, layers: { hello: 23 } } } } },
//       b: 2,
//     },
//     {
//       a: { z: 1, d: { j: { x: 3, yd: { more: 23, layers: { hello: 23 } } } } },
//       b: 2,
//     }
//   )
// ); // => true

// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
