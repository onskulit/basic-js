const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  if (typeof n !== 'string' || n.length !== 17) return false;

  nArr = n.split('-');

  if (nArr.length != 6) return false;

  for (let pare of nArr) {
    if (pare.length !== 2) return false;

    if (pare[0] !== '0' && !parseInt(pare[0], 16) || pare[0] !== '0' && !parseInt(pare[0], 16)) return false;
  }

  return true;
}

module.exports = {
  isMAC48Address
};
