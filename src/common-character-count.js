const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let commonCounter = 0;

  let uniqueS1 = s1.split('');
  let uniqueS2 = s2.split('');

  for (let symbol of uniqueS1) {
    if (uniqueS2.includes(symbol)) {
      commonCounter++;
      delete uniqueS2[uniqueS2.indexOf(symbol)];
    }
  }

  return commonCounter;
}

module.exports = {
  getCommonCharacterCount
};
