// 'use strict' confirms you're using most up-to-date version of js
'use strict';

// create var that will match what we put in index.html in ng-app
var spacecatApp = angular.module('spacecatApp', []);

// takes two parameters: ng-controller and an anonymous function
// function takes one parameter, a global scope.
// scope is a place where we store resources, where all of the data is
spacecatApp.controller('CatListCtrl', function($scope){
  // here we are making the resources
  // .cats has to match ng-repeat
  // this has to point to some kind of array
  $scope.cats = [
    { "id": 1,
      "name": "bigbelly",
      "bio": "Emerged into consciousness how far away shores of the cosmic ocean Cambrian explosion",
      "color": "white",
      "personality": "relaxed",
      "planets": 2},
    { "id": 2,
      "name": "keyboard",
      "bio": "decipherment from which we spring tendrils of gossamer clouds quasar ship of the imagination rings of Uranus",
      "color": "grey",
      "personality": "nervous",
      "planets": 45},
    { "id": 3,
      "name": "laser",
      "bio": "stirred by starlight, gathered by gravity worldlets Jean-François Champollion at the edge of forever billions",
      "color": "grey",
      "personality": "aggresive",
      "planets": 666},
    { "id": 4,  
      "name": "lounge",
      "bio": "Flatland not a sunrise but a galaxyrise emerged into consciousness a mote of dust suspended in a sunbeam globular star cluster",
      "color": "grey",
      "personality": "relaxed",
      "planets": 1},
    { "id": 5,
      "name": "ohno",
      "bio": "Euclid preserve and cherish that pale blue dot Jean-François Champollion network of wormholes",
      "color": "orange",
      "personality": "nervous",
      "planets": 1337},
    { "id": 6,
      "name": "yucky",
      "bio": "The only home we've ever known dream of the mind's eye, prime number.",
      "color": "brown",
      "personality": "relaxed",
      "planets": 7}
  ];
});