const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let depthes =[];
    for (let i = 0; i < arr.length; i++) {
      let elementDepth = 1;
      if (arr[i] instanceof Array) {
        elementDepth += this.calculateDepth(arr[i]);
      }
      if (elementDepth > depth) depth = elementDepth;
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
