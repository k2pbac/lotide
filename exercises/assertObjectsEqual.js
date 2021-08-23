const assertObjectsEqual = function(actual, expected) {

  let actualKeys = Object.keys(actual);

  if (Object.keys(expected).length === Object.keys(actual).length) {

    if (typeof actual === 'object' && typeof expected === 'object' && !Array.isArray(actual) && !Array.isArray(expected)) {
   
      for (let key of actualKeys) {
        if (Object.prototype.hasOwnProperty.call(expected, key)) {
          if (expected[key] !== actual[key] && !Array.isArray(expected[key]) && !Array.isArray(actual[key])) {
            return false;
          } else if (expected[key] !== actual[key] && Array.isArray(expected[key]) && Array.isArray(actual[key])) {
            for (let el of actual[key]) {
              if (!expected[key].includes(el)) {
                return false;
              }
            }
          }
        }
      }
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};


module.exports = {
  assertObjectsEqual
}