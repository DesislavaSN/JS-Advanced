const { expect } = require('chai');
const { flowerShop } = require('./3.flowerShop');

describe('Flower shop', () => {
    describe('calcPriceOfFlowers Test', () => {
        it('test 1', () => {
            expect(() => flowerShop.calcPriceOfFlowers(1, '1', '1')).to.throw("Invalid input!");
            expect(() => flowerShop.calcPriceOfFlowers('1', 1, '1')).to.throw("Invalid input!");
            expect(() => flowerShop.calcPriceOfFlowers('1', '1', 1)).to.throw("Invalid input!");
            expect(() => flowerShop.calcPriceOfFlowers('1', '1', '1')).to.throw("Invalid input!");
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, 1)).to.throw("Invalid input!");
            expect(() => flowerShop.calcPriceOfFlowers('1', 1.1, 1.1)).to.throw("Invalid input!");
        })

        it('test 2', () => {
            expect(flowerShop.calcPriceOfFlowers('a', 1, 2)).to.equal(`You need $${(1*2).toFixed(2)} to buy a!`);
        })

        it('test 3', () => {
            expect(flowerShop.calcPriceOfFlowers('A', 1, 2)).to.equal(`You need $${1*2}.00 to buy A!`);
        })
    })

    describe('checkFlowersAvailable Test', () => {
        it('test 1', () => {
            expect(flowerShop.checkFlowersAvailable('a', ['a', 'b'])).to.include(`The a are available!`);
        })

        it('test 2', () => {
            expect(flowerShop.checkFlowersAvailable('c', ['a', 'b'])).to.include(`The c are sold! You need to purchase more!`);
            expect(flowerShop.checkFlowersAvailable('a', ['a'])).to.include(`The a are available!`);

        })

        it('test 3', () => {
            expect(flowerShop.checkFlowersAvailable('a', ['a', 'c'])).to.include(`The a are available!`);
        })
    })

    describe('sellFlowers Test', () => {
        it('test 1', () => {
            expect(() => flowerShop.sellFlowers(1,1)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers([],'1')).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers('1',1)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers({},1)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers('1','1')).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers([],-1)).to.throw('Invalid input!');

        })

        it('test 2', () => {
            expect(flowerShop.sellFlowers(['a', 'b', 'c'],1)).to.deep.equal('a / c');
        })

        it('test 3', () => {
            expect(flowerShop.sellFlowers(['a', 'b', 'c', 'd'], 2)).to.deep.equal('a / b / d');
        })
    })
})
