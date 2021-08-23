const eqObjectsRecursive = function (object1, object2) {
  let keys = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (
    typeof object2[keys[0]] === "object" &&
    typeof object1[keys[0]] === "object"
  ) {
    return eqObjectsRecursive(object1[keys[0]], object2[keys[0]]);
  } else if (
    object1[keys[0]] !== object2[keys[0]] ||
    !keys.includes(keys2[0])
  ) {
    return false;
  }

  if (keys.length === 1) {
    return true;
  }

  delete object1[keys[0]];
  delete object2[keys[0]];
  return eqObjectsRecursive(object1, object2);
};


module.exports=  {
  eqObjectsRecursive
}