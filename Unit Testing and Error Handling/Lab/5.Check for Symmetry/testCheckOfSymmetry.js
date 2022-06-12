const { expect } = require('chai');
const { isSymmetric } = require('./5.checkForSymmetry');

// console.log(isSymmetric([1,2,2,1]));

describe('Symmetric Test', () => {
    it('works with symmetric array', () => {
        expect(isSymmetric([1,2,2,1])).to.be.true;
    });

    it('works only with array', () => {
        expect(isSymmetric([0,1])).to.equal(Array.isArray == true, 'this is not an array');
    });

    it('return false for non-symmetric array', () => {
        expect(isSymmetric([1,2,2])).to.be.false;
    });

    it('return false for non-array', () => {
        expect(isSymmetric(0,1)).to.be.false;
    });

    it('return false for array of strings', () => {
        expect(isSymmetric([ 'a', 'b', 'b'])).to.be.false;
    });

    it('return false for string', () => {
        expect(isSymmetric('abba')).to.be.false;
    });

    it('works with symmetric array not from the same type of elements', () => {
        expect(isSymmetric([1,2,2,'1'])).to.be.false;
    });
});
