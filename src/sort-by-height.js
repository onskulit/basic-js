const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

 function sortByHeight(arr) {
  let positions = arr.map((num, index) => {if (num === -1) return index})
  .filter(num => num !== undefined);

  let sortedArr = arr.filter(num => num !== -1).sort((a, b) => a - b);

  let result = [];

  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (positions.includes(i)) {
      result.push(-1);
      continue;
    }

    result.push(sortedArr[counter]);
    counter++;
  }

  return result;
}

module.exports = {
  sortByHeight
};
