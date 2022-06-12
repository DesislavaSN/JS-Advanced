const { expect } = require('chai');
const { sum } = require('./4.sum');

// console.log(sum([1,2,3,4]));

describe('Sum of Numbers Test', () => {
    it ('works with an aray of numbers', () => {
        expect(sum([1,2,2])).to.equal(5, 'did not work with numbers');
    });  

    it ('works with negative numbers', () => {
        expect(sum([-1, -2, -3])).to.equal(-6, 'did not work with negative numbers');
    });

    it ('it works with one number', () => {
        expect(sum([0])).to.equal(0, 'did not work with one number')
    })
               
});
