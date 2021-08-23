const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here

  let newSentence = sentence.trim().toLowerCase();

  for (let i = 0; i < newSentence.length; i++) {
    if (Object.prototype.hasOwnProperty.call(results, newSentence[i])) {
      results[newSentence[i]].push(i);
    } else {
      results[newSentence[i]] = [i];
    }
  }

  return results;
};

module.exports = {
  letterPositions
}