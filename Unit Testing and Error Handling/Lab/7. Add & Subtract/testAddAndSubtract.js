const { expect } = require("chai");
const { createCalculator } = require("./7.addSubtract");

// let calc = createCalculator();
// calc.add("5");
// calc.add(5);
// calc.add(-5);
// calc.subtract('a');
// console.log(calc.get());
// console.log(calc.add);
// console.log(calc.value);
// console.log(calc.value += 1);

describe('Add & Substract Test', () => {
    it('check whether the return properties are functions', () => {
        expect(typeof createCalculator().add).to.equal('function');
        expect(typeof createCalculator().subtract).to.equal('function');
        expect(typeof createCalculator().get).to.equal('function');
    });

    it('check whether returns an object', () =>{
        let calc = createCalculator();
        expect(typeof calc).to.equal('object');
    });

    describe('Add function Test', () => {
        it('check if add calsulate properly with a number', () => {
            let calc = createCalculator();
            calc.add(1);
            expect(calc.get()).to.equal(1);
        });
        it('check if add calsulate properly with number as string', () => {
            let calc = createCalculator();
            calc.add('1');
            expect(calc.get()).to.equal(1);
        });
        it('check if add calsulate properly with a string', () => {
            let calc = createCalculator();
            calc.add('a');
            expect(calc.get()).to.be.NaN;
        });
    });

    describe('Subtract function Test', () => {
        it('check if subtract calsulate properly with a number', () => {
            let calc = createCalculator();
            calc.subtract(1);
            expect(calc.get()).to.equal(-1);
        });
        it('check if subtract calsulate properly with number as string', () => {
            let calc = createCalculator();
            calc.subtract('1');
            expect(calc.get()).to.equal(-1);
        });
        it('check if subtract calsulate properly with a string', () => {
            let calc = createCalculator();
            calc.subtract('a');
            expect(calc.get()).to.be.NaN;
        });
    });

    describe('Value Test', () => {
        it('check whether value can be changed', () =>{
            let calc = createCalculator();
            expect(calc.value += 1).to.be.NaN;
        });

        it('check whether value can be accessed', () =>{
            let calc = createCalculator();
            expect(calc.value).to.be.undefined;
        });
    });
});
