

const middle = (arr) => {

  if (Array.isArray(arr)) {
    if (arr.length <= 1 && arr.length >= 0) {
      return [];
    } else if (arr.length % 2 !== 0) {
      return [arr[Math.floor(arr.length / 2)]];
    } else {
      return [arr[Math.floor((arr.length / 2)) - 1], arr[Math.floor(arr.length / 2)]];
    }
  }
  return [];
};

module.exports = {
  middle
}