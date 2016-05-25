import angular from 'angular';
import books from './list/clBooks';
import bookDetails from './details/clBookDetail'
import addBook from './add/clAddBook'

export default angular.module('book', [books, bookDetails, addBook]).name;
