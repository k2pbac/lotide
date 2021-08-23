const flatten = (arr) => {
  const newArr = [];
  const recArray = (arr) => {

    if (Array.isArray(arr) && arr.length) {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          recArray(arr[i]);
        } else {
          newArr.push(arr[i]);
        }
      }
    }
  };
  recArray(arr);
  return newArr;
};

module.exports = {
  flatten
}
