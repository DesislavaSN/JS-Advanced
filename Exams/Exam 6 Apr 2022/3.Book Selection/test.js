// 3. Book Selection Test 

const { expect } = require('chai');
const { bookSelection } = require('./03.bookSelection');

describe('Book Selection Test', () => {
    describe('isGenreSuitable Test', () => {
        it('books are suitable', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Horror', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Alice', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Alice', 10)).to.equal('Those books are suitable');
        });

        it('books are NOT suitable for kids of 12 years-old age', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
        });

        it('books are NOT suitable for kids under 12 years-old age', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 10)).to.equal('Books with Thriller genre are not suitable for kids at 10 age');
            expect(bookSelection.isGenreSuitable('Horror', 10)).to.equal('Books with Horror genre are not suitable for kids at 10 age');

        });
    });

    describe('isItAffordable Test', () => {
        it('not affordable price', () => {
            expect(bookSelection.isItAffordable(10, 5)).to.equal("You don't have enough money");
        });

        it('affordable price', () => {
            expect(bookSelection.isItAffordable(5, 10)).to.equal("Book bought. You have 5$ left");
            expect(bookSelection.isItAffordable(5, 5)).to.equal("Book bought. You have 0$ left");
        });

        it('budget & price must be numbers', () => {
            expect(() => bookSelection.isItAffordable('1', 2)).to.throw("Invalid input");
            expect(() => bookSelection.isItAffordable(1, '2')).to.throw("Invalid input");
            expect(() => bookSelection.isItAffordable('1', '2')).to.throw("Invalid input");

        });
    });

    describe('suitableTitles Test', () => {
        it('single match', () => {
            expect(bookSelection.suitableTitles([{
                title: 'aa',
                genre: 'a'
            }], 'a')).to.deep.equal(['aa']);
        });

        it('two matches', () => {
            expect(bookSelection.suitableTitles([{
                title: 'aa',
                genre: 'a'
            },
            {
                title: 'bb',
                genre: 'a'
            },
            {
                title: 'ab',
                genre: 'b'
            }], 'a', 'b')).to.deep.equal(['aa', 'bb']);
        });

        it('no matches', () => {
            expect(bookSelection.suitableTitles([{
                title: 'ab',
                genre: 'c'
            }], 'a')).to.deep.equal([]);
        });

        it('invalid input', () => {
            expect(() => bookSelection.suitableTitles('aaa', 'a')).to.throw('Invalid input');
        })
    });
    
});