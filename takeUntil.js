


const takeUntil = function(array, callback) {
  
  const results = [];

  if (Array.isArray(array) && array.length) {

    for (const el of array) {
      if (!callback(el)) results.push(el); else break;
    }

  }

  return results;

};

module.exports ={
  takeUntil
}