import angular from 'angular';
import BookDetailsController from './bookdetailscontroller';
import bookDetailsTemplate from './book-details.html'
const moduleName = 'book.detail';
angular.module(moduleName, [])
    .directive('clBookDetail', BookDetail);

function BookDetail() {
    return {
        restrict: 'E',
        template: bookDetailsTemplate,
        controller: BookDetailsController,
        controllerAs: 'model'
    }
}
export default moduleName;