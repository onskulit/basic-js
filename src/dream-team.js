const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let secretName = [];

  for (let member of members) {
    if (typeof member != 'string') {
      continue;
    }
    for (let letter of member) {
      if (letter != ' ') {
        secretName.push(letter.toUpperCase());
        break;
      }
    }
  }

  return secretName.sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');
}

module.exports = {
  createDreamTeam
};
