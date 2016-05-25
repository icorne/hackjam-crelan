import angular from 'angular';
import BookAddController from './bookaddcontroller';
import bookAddTemplate from './add-book.html'
const moduleName = 'book.add';
angular.module(moduleName, [])
    .directive('clAddBook', clAddBook)
    .directive('clRequired', clRequired);

function clAddBook() {
    return {
        restrict: 'E',
        template: bookAddTemplate,
        controller: BookAddController,
        controllerAs: 'newBook',
    }
}

function clRequired() {
    return {
        restrict: 'A',
        require: '^?ngModel',
        link: function ($scope, $element, $attr, ctrl) {
            if (!ctrl) {
                return;
            }
            ctrl.$validators.requiredValidator = (value) => {
                return !!value;
            }

        }
    }
}
export default moduleName;