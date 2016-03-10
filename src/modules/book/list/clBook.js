import angular from 'angular';
import booksTemplate from './book.html';
import BookController from './booklistcontroller';
import BookService from './../services/bookservice';

let module = angular.module('book.list', [BookService])
    .directive('clBook', BookListDirective);

function BookListDirective() {
    return {
        restrict: 'E',
        template: booksTemplate,
        controller: BookController,
        controllerAs: 'model',
        scope: {}
    }
}
export default module.name;