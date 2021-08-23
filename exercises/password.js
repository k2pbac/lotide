

const obfuscatePassword = () => {
  let strongPass = '';

  if (process.argv.slice(2).length) {
    const password = process.argv.slice(2)[0];

    for (let el of password) {
      switch (el) {
      case "a":
        strongPass += "4";
        break;
      case "e":
        strongPass += "3";
        break;
      case "o":
        strongPass += "0";
        break;
      case "l":
        strongPass += "1";
        break;
      default:
        strongPass += el;
        break;
      }
    }

  }
  return strongPass;
};

module.exports = {
  obfuscatePassword
}