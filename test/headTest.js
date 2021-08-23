const {assertEqual }= require("../exercises/assertEqual");
const {head} = require("../exercises/head");

assertEqual(head([5,6,7]), 5); // returns true
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // returns true

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // returns false
assertEqual(1, 1); // returns true; 