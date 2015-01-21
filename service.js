var app = angular.module('userProfiles');

app.service('mainService', function($http) {    //http injected into the service

this.getUsers = function() {
    return $http({ 				//using built in http service
        method: 'GET',                //"get" data from the server
        url: 'http://reqr.es/api/users?page=3'  //url where we get data from (endpoint) Supplied by backend
    })
  }
});


