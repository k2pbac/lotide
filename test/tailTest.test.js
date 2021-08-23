const {assertEqual} = require("../exercises/assertEqual");
const{tail} =require("../exercises/tail");


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!