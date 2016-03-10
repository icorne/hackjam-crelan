import {factoryName} from './../services/bookservice';

BookAddController.$inject = [factoryName];

function BookAddController(BookFactory) {

    function addBook() {
        BookFactory.addBook(this.book);
    }

    this.addBook = addBook;
}


