const { expect } = require('chai');
const { mathEnforcer } = require('./4.mathEnforcer');

// console.log(mathEnforcer.addFive('3'));
// console.log(mathEnforcer.subtractTen(20));
// console.log(mathEnforcer.sum(3,4));

describe('Math Enforecer Test', () => {
    describe('addFive function Test', () => {
        it('whether the param is a positive number', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });

        it('whether the param is a negative number', () => {
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        });

        it('whether the param is a floating number', () => {
            expect(mathEnforcer.addFive(0.01)).to.equal(5.01);
        });

        it('whether the param is not a number returns undefined', () => {
            expect(mathEnforcer.addFive('1')).to.be.undefined;
        });
    });

    describe('subtractTen function Test', () => {
        it('whether the param is a positive number', () => {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        });

        it('whether the param is a negative number', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });

        it('whether the param is a floating number', () => {
            expect(mathEnforcer.subtractTen(0.01)).to.equal(-9.99);
        });

        it('whether the param is not a number returns undefined', () => {
            expect(mathEnforcer.subtractTen('1')).to.be.undefined;
        });
    });

    describe('sum function Test', () => {
        it('whether the params are positive numbers', () => {
            expect(mathEnforcer.sum(0, 1)).to.equal(1);
        });

        it('whether the params are negative numbers', () => {
            expect(mathEnforcer.sum(-1, -2)).to.equal(-3);
        });

        it('whether the params are floating numbers', () => {
            expect(mathEnforcer.sum(0.01, 0.02)).to.equal(0.03);
        });
        
        it('whether the params are not numbers returns undefined', () => {
            expect(mathEnforcer.sum('1',1)).to.be.undefined;
            expect(mathEnforcer.sum(1,'1')).to.be.undefined;
        });
    });
});
