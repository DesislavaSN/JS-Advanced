const { expect } = require('chai');
const { isOddOrEven } = require('./2.evenOrOdd');

// console.log(isOddOrEven('helloo'));

describe('Is Odd Or even String Test', () => {
    it('works with a string that has even length' , () => {
        expect(isOddOrEven('even')).to.equal('even', 'not an even length');
    });

    it('works with a string that has odd length' , () => {
        expect(isOddOrEven('odd')).to.equal('odd', 'not an odd length');
    });

    it('works only with string' , () => {
        expect(isOddOrEven(1)).to.be.undefined;
    });

    it('works with multuple different strings' , () => {
        expect(isOddOrEven('is even or odd')).to.equal('even');
    });
});
