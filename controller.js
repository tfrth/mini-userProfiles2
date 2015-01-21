var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) { //defining mainController, giving it parameters of $scopr and our service
  $scope.getUsers = function() {         //getUsers is equal to function
    mainService.getUsers().then(function(response) {   //.then initiates the promise and once the promise object is received, the function runs.
      $scope.users = response.data.data;      //users is equal the response from $http request 
      // console.log($scope.users)
    });
    // console.log($scope.users);
  }

  $scope.getUsers();  //All we are doing here is calling the mainService.getUsers function, and saying that once we finish that function, THEN define $scope.users.
  console.log($scope.users);
});
