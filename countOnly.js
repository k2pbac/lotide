
const countOnly = function(allItems, itemsToCount) {

  const results = {};


  for (const item of allItems) {
    if (itemsToCount[item] === true && Object.prototype.hasOwnProperty.call(results, item)) {
      results[item] += 1;
    } else if (itemsToCount[item] === true) {
      results[item] = 1;
    }
  }
  return results;
};

module.exports = {
  countOnly
}