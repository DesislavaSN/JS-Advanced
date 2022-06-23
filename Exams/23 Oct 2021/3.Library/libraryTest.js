const { expect } = require('chai');
const { library } = require('./3.library');

describe('library Test', () => {
    describe('calcPriceOfBook', () => {
        it('test 1', () => {
            expect(() => library.calcPriceOfBook(1, 1)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('1', '1')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('A', 1.1)).to.throw('Invalid input');

        })

        it('test 2', () => {
            expect(library.calcPriceOfBook('A', 1981)).to.equal(`Price of A is 20.00`)
        })

        it('test 3', () => {
            expect(library.calcPriceOfBook('A', 1980)).to.equal(`Price of A is 10.00`)
            expect(library.calcPriceOfBook('A', 1979)).to.equal(`Price of A is 10.00`)
        })
    })

    describe('findBook Test', () => {
        it('test 1', () => {
            expect(() => library.findBook([])).to.throw("No books currently available");
        })

        it('test 2', () => {
        expect(library.findBook(['A', 'B', 'C'], 'A')).to.equal("We found the book you want.");
        expect(library.findBook(['A', 'B', 'C'], 'D')).to.equal("The book you are looking for is not here!");
        })

        // it('test 3', () => {
        // expect()
        // })
    })

    describe('arrangeTheBooks Test', () => {
        it('test 1', () => {
            expect(() => library.arrangeTheBooks('1')).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(1.1)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
        })

        it('test 2', () => {
            expect(library.arrangeTheBooks(30)).to.equal("Great job, the books are arranged.");
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");

        })

        it('test 3', () => {
            expect(library.arrangeTheBooks(50)).to.equal("Insufficient space, more shelves need to be purchased.");

        })
    })
})
