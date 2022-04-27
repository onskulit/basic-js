const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let nArr = n.toString().split('');
  let max = 0;
  
  for (let i = 0; i < nArr.length; i++) {
    let currentNumber = '';

    for (let j = 0; j < nArr.length; j++) {
      if (i == j) {
        continue;
      }

      currentNumber += nArr[j];
    }

    if (+currentNumber > max) {
      max = +currentNumber;
    }
  }

  return max;
}

module.exports = {
  deleteDigit
};
