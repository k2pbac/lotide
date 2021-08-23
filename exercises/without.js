
const without = (source , itemsToRemove) => {

  let newArr = [];
  if (Array.isArray(source) && Array.isArray(itemsToRemove) && source.length && itemsToRemove.length) {

    for (let x = 0; x < source.length; x++) {
      let contains = false;
      for (let y = 0; y < itemsToRemove.length; y++) {
        if (source[x] === itemsToRemove[y]) {
          contains = true;
        }
      }
      if (contains === false) {
        newArr.push(source[x]);
      }

    }
 
  }
  return newArr;
};

module.exports = {
  without
}