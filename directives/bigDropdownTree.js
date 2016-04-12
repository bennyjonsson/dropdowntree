(function(angular) {
    'use strict';
    angular
        .module('bigDropdownTree', [])
        .directive('bigDropdownTree',[ function() {
            return {
                restrict: 'AE',
                scope: {
                    ngModel: '=',
                    onNodeClick: '&',
                },
                templateUrl: 'directives/bigDropdownTree.tpl.html',
                require: 'ngModel',
                link: function(scope, element, attrs, ctrl) {
                    scope.tree = scope.ngModel;
                    scope.id = attrs["issueid"];
                    scope.openLabel = attrs["openlabel"] || "Click to open";
                    scope.showDropdown = false;
                    scope.showNodes = {};
                    scope.nodeClicked = function(node) {
                        console.log(node.value);
                        scope.showDropdown = false;
                        scope.onNodeClick()(node, scope.id);
                    }
                    scope.toggleDropdown = function() {
                        scope.showDropdown = !scope.showDropdown;
                    }
                    scope.closeDropdown = function() {
                        scope.showDropdown = false;
                    }
                    scope.toggleNodes = function(key) {
                        scope.showNodes[key] = !scope.showNodes[key];
                    }
                }
            };
        }]);

})(angular);
