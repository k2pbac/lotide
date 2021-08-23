const {eqArrays} = require("../exercises/eqArrays");
const assert = require("chai").assert;

describe("#eqObjects", () => {
  it("returns true for ([1, 2, 3], [1, 2, 3])", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3])); 
  });
  it("returns false for ([1, 2, 3], [3, 2, 1])", () => {
    assert.isTrue(!eqArrays([1, 2, 3], [3, 2, 1]));
  });
  it(`returns true for (["1", "2", "3"], ["1", "2", "3"])`, () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"])); 
  });
  it(`returns false for (["1", "2", "3"], ["1", "2", 3])`, () => {
    assert.isTrue(!eqArrays(["1", "2", "3"], ["1", "2", 3])); 
  });
});
