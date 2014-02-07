// 'use strict' confirms you're using most up-to-date version of js
'use strict';

// create var that will match what we put in index.html in ng-app
var spacecatApp = angular.module('spacecatApp', []);

// takes two parameters: ng-controller and an anonymous function
// function takes one parameter, a global var scope.
// scope is a place where we store resources, where all of the data is
spacecatApp.controller('CatListCtrl', function($scope, $http){
  // only attempt to bind data if the get request is successful
  $http.get("cats/cats.json").success( function(data){
    $scope.cats = data;
  });
  // here we are making the resources
  // .cats has to match ng-repeat
  // this has to point to some kind of array
  
});