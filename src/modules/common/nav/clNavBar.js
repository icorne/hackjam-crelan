import angular from 'angular';
import navTemplate from './nav.html'
import NavController from './navcontroller'

angular.module('common.nav', [])
    .directive('clNavBar', clNavBar);

function clNavBar() {
    return {
        restrict: 'E',
        template: navTemplate,
        controller: NavController,
        controllerAs: 'nav'
    }
};

export default angular.module('common.nav').name;

