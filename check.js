const check = (number) => {
  let numbers = number.toString().split("");

  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  numbers = numbers
    .reverse()
    .map((num, index) =>
      index % 2 !== 0 ? +num : +num * 2 <= 9 ? +num * 2 : +num * 2 - 9
    )
    .reverse();

  let sum = numbers.reduce(reducer);
  let checkDigit = 10 - (sum % 10);

  return parseInt(number + "" + checkDigit);
};

module.exports = check;
