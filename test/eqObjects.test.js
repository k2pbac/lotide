const {eqObjects} = require("../eqObjects");


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

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true - > not recursive
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
