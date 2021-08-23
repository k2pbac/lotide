
const findKeyByValue = (obj, value) => {

  let keys = Object.keys(obj);

  for (let key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (obj[key] === value) {
        return key;
      } else if (Array.isArray(obj[key])) {
        for (let el of obj[key]) {
          if (el === value) {
            return key;
          }
        }
      }
    }
  }


  return undefined;
};

module.exports = {
  findKeyByValue
}

