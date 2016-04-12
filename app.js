angular.module('appDropDown',['bigDropdownTree'])
.controller('Controller', ['$scope', function($scope) {
  
  $scope.setUser = function(node,issueId) {
    alert("From app" + node.key + " : " + node.value + " issueId: " + issueId );  
  };
  
   $scope.iLikeBacon = function(ba,con) {
    alert("I like " + ba.value + " age " + ba.age + " issueId: " + con );  
  };
  $scope.userTree =
    [{key: "1",value: "Kalle"}, 
    {key: "2", value: "Group 1",
    nodes: [{key: "20",value: "Greger"},
        {key:"21",value:"SubGroup 1",
        nodes: [{key:"201",value:"Kent"},
                {key:"202",value:"Jesus"}
                ]
            }]
    },
    {key: "3",value: "Tim"},
    {key: "4",value: "Group 2",
        nodes: [{ key: "4011", value: "Simon" },
                { key: "4012", value: "Tiger" }]
    }]; 
                        
$scope.baconTree =
    [{key: "1",value: "Bacon 1",age:1}, 
    {key: "2",value: "Bacon 2",age:12,
        nodes: [{key: "20",value: "Bacon 20",age:42},
                {key:"21",value:"bacon 21",age:99,
                    nodes: [{key:"201",value:"bacon 201",age:69},
                    {key:"202",value:"Bacon 202", age:666}]
                }]
    }];

$scope.sentiment =
    [
        {key:null,value:'Do not set',class:'fa fa-minus-square-o'},
        {key:'1',value:'Positive' ,class:'fa fa-plus-square'},
        {key:'2',value:'Neutral' ,class:'fa fa-check-square'},
        {key:'3',value:'Negative',class:'fa fa-minus-square' },
    ];
}]);