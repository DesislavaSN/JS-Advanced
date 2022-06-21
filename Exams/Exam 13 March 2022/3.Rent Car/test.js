const { expect } = require('chai');
const { rentCar }= require('./rentCar');

describe('renta car test', () => {

    describe('search Car Test', () => {
        it('test 1', () => {
            expect(rentCar.searchCar(['a'], 'a')).to.equal(`There is 1 car of model a in the catalog!`);
            expect(rentCar.searchCar(['a', 'b'], 'b')).to.equal(`There is 1 car of model b in the catalog!`);
        })

        it('test 2', () => {
            expect(() => rentCar.searchCar(['a', 'b'], 'c')).to.throw('There are no such models in the catalog!')
        })

        it('test 3', () => {
            expect(() => rentCar.searchCar(1, 1)).to.throw('Invalid input!');
            expect(() => rentCar.searchCar([], -1)).to.throw('Invalid input!');
            expect(() => rentCar.searchCar('1', 1)).to.throw('Invalid input!');
            expect(() => rentCar.searchCar([], 1)).to.throw('Invalid input!');
            expect(() => rentCar.searchCar({}, '1')).to.throw('Invalid input!');
        })
    })

    describe('calculate Price Of Car Test', () => {
        it('test 1', () => {
            expect(() => rentCar.calculatePriceOfCar('1', '1')).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(1, '1')).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(1, 1)).to.throw('Invalid input!');
        })

        it('test 2', () => {
            expect(rentCar.calculatePriceOfCar('Audi', 1)).to.equal(`You choose Audi and it will cost $36!`);
            expect(rentCar.calculatePriceOfCar('Audi', 10)).to.equal(`You choose Audi and it will cost $360!`);

        })

        it('test 3', () => {
            expect(() => rentCar.calculatePriceOfCar('A', 1)).to.throw('No such model in the catalog!');
        })
    })

    describe('check Budget Test', () => {
        it('test 1', () => {
            // (costPerDay, days, budget) 
            expect(() => rentCar.checkBudget(1, '1', '1')).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget('1', 1, '1')).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(1, '1', 1)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget('1', '1', '1')).to.throw('Invalid input!');
        })

        it('test 2', () => {
            expect(rentCar.checkBudget(1, 1, 1)).to.equal(`You rent a car!`);
        })

        it('test 3', () => {
            expect(rentCar.checkBudget(10, 1, 1)).to.equal('You need a bigger budget!');
        })
    })
})