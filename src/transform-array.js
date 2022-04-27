const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  let transformedArr = [];

  outer: for (let i = 0; i < arr.length; i++) {
    let transformedValue = arr[i];

    switch (arr[i]) {
      case '--double-next':
        if (arr[i + 1]) {
          transformedValue = arr[i + 1];
          break;
        } else {
          break outer;
        }
      case '--double-prev':
        if (arr[i - 1]) {
          transformedValue = arr[i - 1];
          break;
        }
        continue;
      case '--discard-prev':
        if(arr[i - 1]) {
          transformedArr.pop();
        }
        continue;
      case '--discard-next':
        if(arr[i + 2]) {
          i += 2;
          continue;
        } else {
          break outer;
        }
    }

    transformedArr.push(transformedValue);
  }

  return transformedArr;
}

module.exports = {
  transform
};
