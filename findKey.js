const findKey = (object, callback) => {

  if (typeof object === 'object' && !Array.isArray(object)) {

    for (const el in object) {
      const keys = object[el];
      
      if (callback(keys)) {
        return el;
      }
    }
  }
  return undefined;
};

module.exports = {
  findKey
}