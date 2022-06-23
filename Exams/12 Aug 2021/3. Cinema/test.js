const { expect } = require('chai');
const {cinema} = require('./3.cinema');

describe('Cinema Name', () => {
    describe('showMovies Test', () => {
        it('test 1', () => {
            expect(cinema.showMovies([])).to.equal("There are currently no movies to show.");
        })

        it('test 2', () => {
            expect(cinema.showMovies(['A'])).to.equal('A');
        })

        it('test 3', () => {
            expect(cinema.showMovies(['A', 'B', 'C'])).to.equal('A, B, C');
        })
    })

    describe('ticketPrice Test', () => {
        it('test 1', () => {
            expect(() => cinema.ticketPrice('A')).to.throw("Invalid projection type.");
            expect(() => cinema.ticketPrice(1)).to.throw("Invalid projection type.");
        })

        it('test 2', () => {
        expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
        })

        it('test 3', () => {
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
        })

        it('test 4', () => {
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        })
    })

    describe('swapSeatsInHall Test', () => {
        it('test 1', () => {
            expect(cinema.swapSeatsInHall(1, 2)).to.equal('Successful change of seats in the hall.');
        })

        it('test 2', () => {
            expect(cinema.swapSeatsInHall('1', 1)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, '1')).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall('1', '1')).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 1)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(-1, 100)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1.1, 2.1)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 2.1)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1.1, 2)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(15, 30)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(50, 13)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(50, 30)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(0, -1)).to.equal("Unsuccessful change of seats in the hall.");

        })
    })
})
