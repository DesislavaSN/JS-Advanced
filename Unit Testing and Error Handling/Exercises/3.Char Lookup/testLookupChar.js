const { expect } = require('chai');
const { lookupChar } = require('./3.charLookup');

// console.log(lookupChar('hi', -1));

describe('Char Lookup Test', () => {
    it('works only with correct type of parameters - String', () => {
        expect(lookupChar(0, 0)).to.be.undefined;
    });

    it('works only with correct type of parameters - Number', () => {
        expect(lookupChar('012', '1')).to.be.undefined;
    });

    it('works with correct value of index and not negative number', () => {
        expect(lookupChar('string', -1)).to.equal('Incorrect index');
    });

    it('works with correct value of index and not outside the bounds', () => {
        expect(lookupChar('string', 10)).to.equal('Incorrect index');
    });

    it('works only with integers as index value', () => {
        expect(lookupChar('string', 1.1)).to.be.undefined;
    });

    it('works with correct parameter and correct value of index', () => {
        expect(lookupChar('string', 1)).to.equal('t');
    });
});
