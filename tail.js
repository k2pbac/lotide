// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let equal = false;


  for (let el of actual) {
    if (!expected.includes(el)) {
      equal = false;
      break;
    } else {
      equal = true;
    }
  }

  if (equal === false) {
    console.log(`😡😡😡 Assertion Failed: ${actual} === ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }

};
const tail = (arr) => {
  return arr.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
