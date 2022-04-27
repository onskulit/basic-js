const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let domainsSeparate = domains.map(domain => {
    return domain.split('.').reverse();
  })

  let stats = {};

  for (let domain of domainsSeparate) {
    let currentDNS = '';
    for (let dns of domain) {
      currentDNS += `.${dns}`;
      stats[currentDNS] = stats[currentDNS] ? ++stats[currentDNS] : 1;
    }
  }

  return stats;
}

module.exports = {
  getDNSStats
};
