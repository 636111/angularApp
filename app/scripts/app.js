'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('angularApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl : '../views/main.html'
      })
      .when('/about', {
        templateUrl: '../views/about.html'
      })
      .when('/contact', {
        templateUrl: '../views/contact.html'
      })
      .otherwise('/');
  }]);
