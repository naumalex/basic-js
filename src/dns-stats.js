const { NotImplementedError } = require('../extensions/index.js');
const { repeater } = require('./extended-repeater.js');

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
  const domainStats = {};
  for (let i = 0; i < domains.length; i++) {
    arr = domains[i].split('.').reverse();
    for (j = 0; j < arr.length; j++) {
      let domain = '.' + arr.slice(0, j + 1).join('.');
      if (!domainStats[domain]) {
        domainStats[domain] = 1;
      }
      else { 
        (domainStats[domain] += 1); 
      };
    }
  }
  return domainStats;
}

module.exports = {
  getDNSStats
};
