'use strict';

//This configures the routes and associates each route with a view and a controller
angular
  .module('angularApp', ['ngRoute','ui.bootstrap.pagination'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl : '../views/main.html',
        controller : 'countriesController'
      })
      .when('/about', {
        templateUrl: '../views/about.html'
      })
      .when('/contact', {
        templateUrl: '../views/contact.html'
      })
      .otherwise('/');
  }]);
