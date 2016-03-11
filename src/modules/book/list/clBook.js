import angular from 'angular';
import bookTemplate from './book.html';

let module = angular.module('book.list.book', [])
    .directive('clBook', BookDirective);

function BookDirective() {
    return {
        restrict: 'E',
        template: bookTemplate,
        scope: {
            book: '=source'
        }
    }
}
export default module.name;