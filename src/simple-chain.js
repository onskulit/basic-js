const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],  

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    let link;

    if (value === undefined) {
      link = this.chain.length === 0 ? `( )` : `~~( )`;
    } else {
      link = this.chain.length === 0 ? `( ${value} )` : `~~( ${value} )`;
    }
      

    this.chain.push(link);
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || position > this.chain.length || position < 1 || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }

    if (position === 1 && this.chain[1]) {
      this.chain[1] = this.chain[1].replace(/~~/, '');
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    if (this.chain.length > 1) {
      this.chain[this.chain.length - 1] = this.chain[this.chain.length - 1].replace(/~~/, '');
      this.chain[0] = this.chain[0].replace(/./, '~~(');
      this.chain = this.chain.reverse();
    }
    return this;
  },

  finishChain() {
    let chainString = this.chain.join('');
    this.chain = [];
    return chainString; 
  }
};

module.exports = {
  chainMaker
};
