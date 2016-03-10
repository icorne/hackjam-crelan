import angular from 'angular';
import books from './list/clBook';
import bookDetails from './details/clBookDetail'

export default angular.module('book', [books, bookDetails]).name;
