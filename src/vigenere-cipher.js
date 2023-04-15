const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */


class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.A_KEY_CODE = 'A'.charCodeAt(0);
    this.Z_KEY_CODE = 'Z'.charCodeAt(0);
  }

  encrypt(data, key) {
    if ((data===undefined) || (key === undefined)) {
      throw Error('Incorrect arguments!');
     }
    data = data.toUpperCase();
    key = key.toUpperCase();
    let keyNormalized = key.repeat(Math.ceil(data.length / key.length)).slice(0, data.length);
    let encData = '';
    let j = 0;
    for (let i = 0; i < data.length; i++) {
      if ((data.charCodeAt(i) >= this.A_KEY_CODE) && (data.charCodeAt(i) <= this.Z_KEY_CODE)) {
        let shift = keyNormalized.charCodeAt(j) - this.A_KEY_CODE;
        let encCharCode = data.charCodeAt(i) + shift;
        if (encCharCode > this.Z_KEY_CODE) {
          encCharCode = encCharCode - (this.Z_KEY_CODE - this.A_KEY_CODE) - 1;
        }

        encData += String.fromCharCode(encCharCode);
        j++;
      }
      else {
        encData += data[i];
      }
    }
    if (!this.isDirect) encData = encData.split('').reverse().join('');
    return encData;
  }

  decrypt(data, key) {
    if ((data===undefined) || (key === undefined)) {
      throw Error('Incorrect arguments!');
     }

     data = data.toUpperCase();
     key = key.toUpperCase();
     let keyNormalized = key.repeat(Math.ceil(data.length / key.length)).slice(0, data.length);
     let encData = '';
     let j = 0;
     for (let i = 0; i < data.length; i++) {
      if ((data.charCodeAt(i) >= this.A_KEY_CODE) && (data.charCodeAt(i) <= this.Z_KEY_CODE)) {
        let shift = keyNormalized.charCodeAt(j) - this.A_KEY_CODE;
        let encCharCode = data.charCodeAt(i) - shift;
        if (encCharCode < this.A_KEY_CODE) {
          encCharCode = encCharCode + (this.Z_KEY_CODE - this.A_KEY_CODE) + 1;
        }

        encData += String.fromCharCode(encCharCode);
        j++;
      }
      else {
        encData += data[i];
      }
    }
    if (!this.isDirect) encData = encData.split('').reverse().join('');
    return encData;


  }
}

module.exports = {
  VigenereCipheringMachine
};
