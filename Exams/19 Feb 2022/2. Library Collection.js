class LibraryCollection {
    constructor(capacity){
        this.capacity = capacity;
        this.booksCollection = [];
    }

    addBook (bookName, bookAuthor){
        if (this.capacity <= this.booksCollection.length ) {
            throw new Error("Not enough space in the collection.");
        } 

        const book = {
            bookName,
            bookAuthor,
            paid: false,
        }
        this.booksCollection.push(book);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook( bookName ){
        let foundBook = this.booksCollection.find(b => b.bookName == bookName);
        if (foundBook == undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (foundBook.payed == true) {
            throw new Error(`${bookName} has already been paid.`);
        }

        foundBook.paid = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName){
        let foundBook = this.booksCollection.find(b => b.bookName == bookName);
        let foundBookIndex = this.booksCollection.findIndex(b => b.bookName == bookName);
        // console.log(foundBook);
        // console.log(foundBookIndex);
        
        if(foundBook == undefined){
            throw new Error("The book, you're looking for, is not found.");
        }
        
        if (foundBook.paid == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        
        this.booksCollection.splice(foundBookIndex, 1);
        return `${bookName} remove from the collection.`;

    }

    getStatistics(bookAuthor){
        let res = [];
        // console.log(this.booksCollection);

        if (bookAuthor == undefined) {
            res.push(`The book collection has ${Math.abs(this.capacity - this.booksCollection.length)} empty spots left.`);
            let sorted = this.booksCollection.sort((a,b) => a.bookName.localeCompare(b.bookName));
            sorted.forEach(b => res.push(`${b.bookName} == ${b.bookAuthor} - ${b.paid ? "Has Paid" : "Not Paid"}.`));
            // "{bookName} == {bookAuthor} - {Has Paid / Not Paid}."
            return res.join('\n');
        } 
        
        if (bookAuthor) {
            let foundBookAuth = this.booksCollection.find(b => b.bookAuthor == bookAuthor);

            if (foundBookAuth != undefined) {
                return `${foundBookAuth.bookName} == ${bookAuthor} - ${foundBookAuth.paid ? "Has Paid" : "Not Paid"}.`;
            } else {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
        }
    }
}

// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
