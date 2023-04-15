const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  
  arr: [],

  getLength() {
    return this.arr.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    this.arr.push('( ' + value + ' )');
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if ((!position) || (this.arr[position - 1] === undefined)) {
      this.arr = [];
      throw Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
    // remove line with error and write your code here
  },
  reverseChain() {
    this.arr.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    let chain = this.arr.join('~~');
    this.arr = [];
    return chain;
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
