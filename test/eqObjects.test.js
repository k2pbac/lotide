const {eqObjects} = require("../exercises/eqObjects");
const assert = require("chai").assert;

describe("#middle", () => {
  it("returns true for (cd, dc)", () => {
    assert.isTrue(eqObjects(cd, dc)); 
  });
  it("returns false for ({ person: jim, age: 24 }, { person: jimmy, age: 23 })", () => {
    assert.isTrue(!eqObjects({ person: "jim", age: 24 }, { person: "jimmy", age: 23 }));
  });
  it("returns true for { apple: 3, orange: 4, banana: 5 }, { apple: 3, orange: 4, banana: 5 }", () => {
    assert.isTrue(eqObjects({ apple: 3, orange: 4, banana: 5 }, { apple: 3, orange: 4, banana: 5 })); 
  });
  it("returns false for { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    assert.isTrue(!eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); 
  });
});



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
