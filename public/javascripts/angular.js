var app = angular.module('myapp',[]);
app.controller('myController', function($scope,$http){

  $http({
    method : 'GET',
    url : '/getuser'
  }).then(function success(response){
    //console.log(response.data);
    $scope.user = response.data;
  },function error(response){
    alert('Error occured');
  })

  $scope.save = function(users){
    console.log($scope.users)
    $http({
      method : 'POST',
      url : '/postuser',
      data : $scope.users
    }).then(function success(response){
      //alert('inserted successfully');
      $scope.user.push(response.data)
      $scope.users = {}
    }, function error(response){
      alert('error occured, please try again!')
    })
  }

})