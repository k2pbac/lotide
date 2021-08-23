
const countLetters = (sentence) => {

  const results = {};
  const newSentence = sentence.replaceAll(" ", "").toLowerCase();

  for (let letter of newSentence) {
    if (Object.prototype.hasOwnProperty.call(results, letter)) {
      results[letter]++;
    } else {
      results[letter] = 1;
    }
  }

  return results;
};

module.exports = {
  countLetters
}