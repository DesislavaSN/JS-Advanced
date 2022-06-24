const { expect } = require('chai');
const { numberOperations } = require('./3.numberOperations')

// 100/ 100
describe('number Operations Test', () => {
    describe('powNumber Test', () => {
        it('test 1', () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
            expect(numberOperations.powNumber(-2)).to.equal(4);
            expect(numberOperations.powNumber(1.2)).to.equal(1.44);
            expect(numberOperations.powNumber(-1.2)).to.equal(1.44);

        })
    })

    describe('numberChecker Test', () => {
        it('test 1', () => {
            expect(() => numberOperations.numberChecker('a')).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker('1a')).to.throw('The input is not a number!');
        })

        it('test 2', () => {
            expect(numberOperations.numberChecker('1')).to.equal("The number is lower than 100!");
            expect(numberOperations.numberChecker(1)).to.equal("The number is lower than 100!");
            expect(numberOperations.numberChecker(-1)).to.equal("The number is lower than 100!");
        })

        it('test 3', () => {
            expect(numberOperations.numberChecker(100)).to.equal("The number is greater or equal to 100!");
            expect(numberOperations.numberChecker(101)).to.equal("The number is greater or equal to 100!");
            expect(numberOperations.numberChecker('101')).to.equal("The number is greater or equal to 100!");

        })
    })

    describe('sumArrays Test', () => {
        it('test 1', () => {
            expect(numberOperations.sumArrays([1,2,3], [1,2,3])).to.deep.equal([ 2, 4, 6 ]);
            expect(numberOperations.sumArrays([1], [1])).to.deep.equal([ 2 ]);
            expect(numberOperations.sumArrays([1,2,3], [1])).to.deep.equal([ 2, 2, 3 ]);
            expect(numberOperations.sumArrays([1], [1, 2, 3])).to.deep.equal([ 2, 2, 3 ]);

        })
    })
})
