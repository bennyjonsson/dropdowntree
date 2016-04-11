(function(angular) {
    'use strict';
    angular
        .module('bigDropdownTree', [])
        .directive('bigDropdownTree', function() {
            return {
                // restrict: 'E',
                scope: {
                    tree:'=ngModel',
                    bigDropdownTree: '&'
                },
                templateUrl: 'directives/bigDropdownTree.tpl.html',
                require: 'ngModel',
                link: function(scope, element, attrs, ctrl) {
                   scope.bigDropdownTree(
                       {
                           key:'Tralla'
                       }
                   );
                }
            };
        });

})(angular);
