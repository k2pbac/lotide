const eqArraysRecursive = function (array1, array2) {
  if (
    Array.isArray(array1) &&
    Array.isArray(array2) &&
    array1.length === array2.length
  ) {
    if (Array.isArray(array1[0]) && Array.isArray(array2[0])) {
      return eqArraysRecursive(
        [array1[0].join(","), ...array1.slice(1)],
        [array2[0].join(","), ...array2.slice(1)]
      );
    } else if (array1[0] !== array2[0]) {
      return false;
    }

    if (array1.length === 0 && array2.length === 0) {
      return true;
    }
    return eqArraysRecursive(array1.slice(1), array2.slice(1));
  }

  return false;
};


module.exports = {
  eqArraysRecursive
}