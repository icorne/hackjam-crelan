import angular from 'angular';
import ngRoute from 'angular-route';
RouteConfig.$inject = ['$routeProvider'];

function RouteConfig($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<cl-book></cl-book>'
        })
        .when('/books', {
            template: '<cl-book></cl-book>'
        })
        .when('/books/add', {
            template: '<cl-add-book></cl-add-book>'
        })
        .when('/books/:id', {
            template: '<cl-book-detail></cl-book-detail>'
        });
}

angular.module('bookstore.routes', [ngRoute]).config(RouteConfig);


export default angular.module('bookstore.routes').name;

