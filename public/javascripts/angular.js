var app = angular.module('myapp',[]);
app.controller('myController', function($scope,$http){

  $scope.save = function(users){
    console.log($scope.users)
    $http({
      method : 'POST',
      url : '/postuser',
      data : $scope.users
    }).then(function success(response){
      alert('inserted successfully');
    }, function error(response){
      alert('error occured, please try again!')
    })
  }

})