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
  let arr = [];
  let strWithAdditions = str;
 
  if ((options.addition !== undefined)){
    if (options.additionRepeatTimes) {
      strWithAdditions += Array(options.additionRepeatTimes).fill(options.addition === null ? 'null' : options.addition)
      .join(options.additionSeparator ? options.additionSeparator: '|' );
    }
    else {
      strWithAdditions += options.addition;
    }

  }

  if (options.repeatTimes) {
    arr = Array(options.repeatTimes).fill(strWithAdditions);
    return arr.join(options.separator ? options.separator: '+' );
  }
  else return strWithAdditions;
}

module.exports = {
  repeater
};
