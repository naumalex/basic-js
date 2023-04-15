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
   let sortedS1 = s1.split('').sort();
   let sortedS2 = s2.split('').sort();
   let count = 0;
   let i = 0;
   let j = 0;
   while ((i < sortedS1.length) && (j < sortedS2.length)) {
      if (sortedS1[i] === sortedS2[j]){
        count++;
        i++;
        j++;
      } 
      else if (sortedS1[i] < sortedS2[j]) {
        i++        
      }
      else {
        j++;
      }
   } 
   return count;
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
