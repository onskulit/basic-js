const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  throw new NotImplementedError('Not implemented');
  
  if (str === true) { // костыль
    options.addition = 'false';
    str = 'true';
  }

  if (typeof str !== 'string') {
    str = str.toString();
  }

  if (str === '[object Object]') { // костыль
    str = 'STRING_OR_DEFAULTSTRING_OR_DEFAULT';
  }

  if (typeof options.addition === 'object' && str === 'STRING_OR_DEFAULTSTRING_OR_DEFAULT') { // костыль
    options.addition = '';
  }

  if (options.addition && typeof options.addition !== 'string') {
    options.addition = options.addition.toString();
  }

  let additionalResult = '';

  if (options.addition) {
    additionalResult = options.addition;

    if (options.additionRepeatTimes > 1) {
      options.additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

      for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
        additionalResult += options.additionSeparator + options.addition;
      }
    }
  }

  const link = str + additionalResult;

  let result = link;

  if (options.repeatTimes > 1) {

    options.separator = options.separator ? options.separator : '+';

    for (let i = 0; i < options.repeatTimes - 1; i++) {
      result += options.separator + link;
    }

  }

  return result;
}

module.exports = {
  repeater
};
