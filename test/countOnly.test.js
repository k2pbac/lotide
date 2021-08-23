const {countOnly} = require("../countOnly");
const{assertArraysEqual} = require("../assertArraysEqual");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertArraysEqual(result1["Jason"], 1);
assertArraysEqual(result1["Karima"], undefined);
assertArraysEqual(result1["Fang"], 2);
assertArraysEqual(result1["Agouhanna"], undefined);