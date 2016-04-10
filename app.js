angular.module('app',['bigDropdown'])
.controller('Controller', ['$scope', function($scope) {
  $scope.bacon = "This is controller BACON";
  $scope.numberTree =
                 [{
                        key: "1",
                        value: "Ett"
                    }, 
                    {
                        key: "2",
                        value: "Två",
                        nodes: [{
                                key: "20",
                                value: "Tjugo",
                        },{key:"21",value:"tjugoett",
                                nodes: [{key:"201",value:"Tvåhunraett"},
                                {key:"202",value:"Två hundra två"}]
                            }]
                        }, 
                        {
                            key: "3",
                            value: "Tre"
                        }, {
                            key: "4",
                            value: "Fyra",
                            nodes: [{ key: "4011", value: "Förtioelva" },
                                { key: "4012", value: "Bacon ipsum dolor amet pork pork belly sausage ground round brisket ball tip landjaeger" }]
                        }]; 
}]);