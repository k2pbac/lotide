const {eqObjectsRecursive} = require("../exercises/eqObjectsRecursive");


console.log(eqObjectsRecursive({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false

console.log(
  eqObjectsRecursive({ a: 1, b: 2, c: undefined }, { a: 1, b: 2, f: undefined })
); //false

console.log(
  eqObjectsRecursive({ a: 1, b: 2, c: undefined }, { a: 1, b: 2, c: undefined })
); //true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjectsRecursive(cd, dc)); // => true

console.log(
  eqObjectsRecursive({ person: "jim", age: 24 }, { person: "jimmy", age: 23 })
); //Should fail

console.log(
  eqObjectsRecursive(
    { apple: 3, orange: 4, banana: 5 },
    { apple: 3, orange: 4, banana: 5 }
  )
); //Should pass

console.log(
  eqObjectsRecursive({ apple: 3, orange: 4, banana: 5 }, [
    { apple: 3, orange: 4, banana: 5 },
  ])
); //Should fail

console.log(eqObjectsRecursive({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
console.log(
  eqObjectsRecursive(
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

console.log(eqObjectsRecursive({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
