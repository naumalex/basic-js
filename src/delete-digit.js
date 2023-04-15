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
  let arr = [];
  n = n.toString();
  let maxN = Number(n.slice(1));
  let num;
  for (let i = 1; i < n.length; i++) {
    num = Number(n.slice(0, i) + n.slice(i+1)) ;
    if (num > maxN) maxN = num; 
  }
  return maxN;
}

module.exports = {
  deleteDigit
};
