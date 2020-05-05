var app = angular.module('myapp',[]);
app.controller('myController',['$scope','$http', function($scope,$http){

  $scope.save = function(users){
  	console.log($scope.users);
    $http({
    	method : 'POST',
    	url : '/postuser',
    	data : $scope.users
    })
  }
  
  $scope.removeUser = function(index,users){
    
  }
}])