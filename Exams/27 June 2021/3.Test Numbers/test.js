const { expect } = require('chai');
const { testNumbers } = require('./3.testNumbers')

describe('testNumbers Test', () => {
    describe('sumNumbers Test', () => {
        it('test 1', () => {
            expect(testNumbers.sumNumbers('1', '2')).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, '2')).to.equal(undefined);
            expect(testNumbers.sumNumbers('1', 2)).to.equal(undefined);
            expect(testNumbers.sumNumbers('a', 1)).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, 'a')).to.equal(undefined);

        })

        it('test 2', () => {
            expect(testNumbers.sumNumbers(1, 2)).to.equal(Number(3).toFixed(2));
            expect(testNumbers.sumNumbers(-1, 2)).to.equal(Number(1).toFixed(2));
            expect(testNumbers.sumNumbers(1, -2)).to.equal(Number(-1).toFixed(2));
            expect(testNumbers.sumNumbers(-1, -2)).to.equal(Number(-3).toFixed(2));
        })
    })

    describe('numberChecker Test ', () => {
        it('test 1', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw("The input is not a number!" );
        })

        it('test 2', () => {
            expect(testNumbers.numberChecker(1)).to.equal("The number is odd!");
            expect(testNumbers.numberChecker(2)).to.equal("The number is even!");

        })

        // expect('foo').to.not.be.NaN;
        it('test 3', () => {
            expect(testNumbers.numberChecker(1)).to.not.be.NaN;
        })
    })

    describe('averageSumArray Test', () => {
        it('test 1', () => {
            expect(testNumbers.averageSumArray([1,2,3,4])).to.equal(2.5);
            expect(testNumbers.averageSumArray([1])).to.equal(1);
            expect(testNumbers.averageSumArray([-1,-2,-3,-4])).to.equal(-2.5);

        })
    })
})
