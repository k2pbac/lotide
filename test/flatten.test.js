const {flatten} = require("../exercises/flatten");
const assert = require("chai").assert;

describe("#flatten", () => {
  it("returns [] for []", () => {
    assert.deepEqual(flatten([]), []); 
  });
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); 
  });
  it("returns [1,2,3,4,5,6,7,8,9,10] for [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]), [1,2,3,4,5,6,7,8,9,10]); 
  });
  it("returns [1, 2, 3, 4] for [[1], [2], [3], 4]", () => {
    assert.deepEqual(flatten([[1], [2], [3], 4]), [1, 2, 3, 4]); 
  });
  it("returns [1, 2, 4, 'hello', 23, 'abc', 8]  for [1,2, [4], ['hello', [23],['abc']],8]", () => {
    assert.deepEqual(flatten([1,2, [4], ['hello', [23],['abc']],8]), [1, 2, 4, 'hello', 23, 'abc', 8]);
  });
});

