const {letterPositions} = require("../exercises/letterPositions");
const assert = require("chai").assert;

describe("#letterPositions", () => {
  it("returns {h: [0], e: [1], l: [2, 3], o: [4]} for 'hello' ", () => {
    assert.deepEqual(letterPositions("hello"), {h: [0], e: [1], l: [2, 3], o: [4]}); 
  });
  it("returns {t: [2], o: [1], d: [2], a: [3], y: [4]} for 'today' ", () => {
    assert.deepEqual(letterPositions("today"), {t: [0], o: [1], d: [2], a: [3], y: [4]}); 
  });
});