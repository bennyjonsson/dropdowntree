angular.module('app',['bigDropdownTree'])
.controller('Controller', ['$scope', function($scope) {
  $scope.bacon = "This is controller BACON";
  $scope.baconFunction = function(key) {
    alert("Bacon:" + key);  
  };
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
                        
                         $scope.baconTree =
                 [{
                        key: "1",
                        value: "Bacon 1"
                    }, 
                    {
                        key: "2",
                        value: "Bacon 2",
                        nodes: [{
                                key: "20",
                                value: "Bacon 20",
                        },{key:"21",value:"bacon 21",
                                nodes: [{key:"201",value:"bacon 201"},
                                {key:"202",value:"Bacon 202"}]
                            }]
                        }]
}]);