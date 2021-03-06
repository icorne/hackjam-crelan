import angular from 'angular';
import BookFactory from './../services/bookservice';

BookDetailsController.$inject = ['$routeParams', 'BookFactory'];

function BookDetailsController($routeParams, BookFactory) {

    if ($routeParams.id) {

        BookFactory.getBook($routeParams.id)
            .then(function (book) {
                angular.extend(this,book);
            }.bind(this));

    }
}
export default BookDetailsController;


