import angular from 'angular';
import common from './modules/common/';
import book from './modules/book/'
import bookRoute from './routes';
import bookMocks from './mocks';

angular.module('bookstore', [common, book, bookRoute, bookMocks]);


document.addEventListener('DOMContentLoaded', function () {
    angular.bootstrap(document.body, ['bookstore']);
});

