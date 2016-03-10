import angular from 'angular';
import BookAddController from './bookaddcontroller';
import bookAddTemplate from './add-book.html'
const moduleName = 'book.detail';
angular.module(moduleName, [])
    .directive('clBookDetail', BookDetail);

function BookDetail() {
    return {
        restrict: 'E',
        template: bookAddTemplate,
        controller: BookAddController,
        controllerAs: 'model'
    }
}
export default moduleName;