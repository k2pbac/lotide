const {assertArraysEqual} = require("../assertArraysEqual");
const {findKeyByValue} = require("../findKeyByValue");

const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  horror: ["Pitch Perfect", "Yes Man"]
};

assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // Should pass
assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // Should pass


assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "comedy"); // Should fail

assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "Pitch Perfect"), "horror"); // Should pass

