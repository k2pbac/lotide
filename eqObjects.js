const eqObjects = function (actual, expected) {
  let actualKeys = Object.keys(actual);

  if (
    typeof actual === "object" &&
    typeof expected === "object" &&
    !Array.isArray(actual) &&
    !Array.isArray(expected)
  ) {
    for (let key of actualKeys) {
      if (Object.prototype.hasOwnProperty.call(expected, key)) {
        if (
          expected[key] !== actual[key] &&
          !Array.isArray(expected[key]) &&
          !Array.isArray(actual[key])
        ) {
          return false;
        } else if (
          expected[key] !== actual[key] &&
          Array.isArray(expected[key]) &&
          Array.isArray(actual[key])
        ) {
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
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

console.log(
  eqObjects({ person: "jim", age: 24 }, { person: "jimmy", age: 23 })
); //Should fail

console.log(
  eqObjects(
    { apple: 3, orange: 4, banana: 5 },
    { apple: 3, orange: 4, banana: 5 }
  )
); //Should pass

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
console.log(
  eqObjects(
    {
      a: { z: 1, d: { j: { x: 3, yd: { more: 23, layers: { hello: 23 } } } } },
      b: 2,
    },
    {
      a: { z: 1, d: { j: { x: 3, yd: { more: 23, layers: { hello: 23 } } } } },
      b: 2,
    }
  )
); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
