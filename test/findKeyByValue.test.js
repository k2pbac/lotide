const {findKeyByValue} = require("../exercises/findKeyByValue");
const assert = require("chai").assert;


describe("#letterPositions", () => {
  it("returns 'drama' for (bestTVShowsByGenre, 'The Wire')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); 
  });
  it("returns undefined for (bestTVShowsByGenre, 'That '70s Show') ", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); 
  });
  it("returns comedy for (bestTVShowsByGenre, 'The Expanse') ", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), 'sci_fi'); 
  });
  it("returns horror for (bestTVShowsByGenre, 'Pitch Perfect') ", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Pitch Perfect"), 'horror'); 
  });
});


const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  horror: ["Pitch Perfect", "Yes Man"]
};

