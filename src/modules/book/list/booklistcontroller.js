import {factoryName} from './../services/bookservice';
BookListController.$inject = [factoryName];

function BookListController(BookFactory) {

    BookFactory.getBooks()
        .then(function (books) {
            this.books = books;
        }.bind(this));

}

export default BookListController;
