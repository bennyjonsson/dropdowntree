(function(angular) {
    'use strict';
    angular
        .module('bigDropdown', [])
        .directive('bigDropdown', function() {
            return {
                restrict: 'E',
                scope: {tree:'=ngModel'},
                templateUrl: 'directives/bigDropdownTree.tpl.html',
                require: 'ngModel',
                link: function(scope, element, attrs, ctrl) {
                   
                }
            };
        });

})(angular);
