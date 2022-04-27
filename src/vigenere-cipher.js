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
  constructor (isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    key = key.toUpperCase();
    message = message.toUpperCase();

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let count = 0;

    let result = message.split('').map((letter, index) => {
      if (!alphabet.includes(letter)) {
        return letter;
      } else {
        const encriptedLetter = String.fromCharCode((message.charCodeAt(index) - 65 + key.charCodeAt(count % key.length) - 65) % 26 + 65);
        count++;
        return encriptedLetter;
      }
    });

    return this.isDirect ? result.join('') : result.reverse().join('');
  }
  
  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    key = key.toUpperCase();
    message = message.toUpperCase();

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let count = 0;

    let result = message.split('').map((letter, index) => {
      if (!alphabet.includes(letter)) {
        return letter;
      } else {
        const decryptedLetter = String.fromCharCode(((message.charCodeAt(index) - key.charCodeAt(count % key.length) + 26) % 26) + 65);
        count++;
        return decryptedLetter;
      }
    });

    return this.isDirect ? result.join('') : result.reverse().join('');
  }
}

console.log(new VigenereCipheringMachine(true).encrypt('attack at dawn!', 'alphonse'));

module.exports = {
  VigenereCipheringMachine
};
