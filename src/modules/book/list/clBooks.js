import angular from 'angular';
import booksTemplate from './books.html';
import BookController from './booklistcontroller';
import BookService from './../services/bookservice';
import clBook from './clBook';

let module = angular.module('book.list', [BookService, clBook])
    .directive('clBooks', BookListDirective);

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