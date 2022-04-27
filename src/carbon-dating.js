const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || sampleActivity <= 0) {
    return false;
  }

  const HALF_LIFE_PERIOD = 5730;
  const MODERN_ACTIVITY = 15;
  const K = 0.693 / HALF_LIFE_PERIOD;
  let activityRatio = MODERN_ACTIVITY / +sampleActivity;
  let age = Math.log(activityRatio) / K;

  if (age <= 0 || !age) {
    return false;
  }

  return Math.ceil(age);
}

module.exports = {
  dateSample
};
