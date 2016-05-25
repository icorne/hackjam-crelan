import {factoryName} from './../services/bookservice';

BookAddController.$inject = [factoryName];

function BookAddController(BookFactory) {

    function addBook() {
        BookFactory.addBook(this.book);
    }

    this.addBook = addBook;
    BookFactory.getBooks()
        .then(function (books) {
            this.books = books;
        }.bind(this));
}


export default BookAddController;