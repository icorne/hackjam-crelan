import angular from 'angular';
import bookstoreTemplate from './bookstore.html'
import navBar from './../nav/clNavBar';

function bookstoreDirective() {
    return {
        restrict: 'EA',
        template: bookstoreTemplate
    };
}

angular.module('common.shell',[navBar])
    .directive('bookstore', bookstoreDirective);

export default angular.module('common.shell').name;