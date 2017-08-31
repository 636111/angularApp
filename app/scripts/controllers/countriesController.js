'use strict';

angular
  .module('angularApp')
  .controller('countriesController', ['$scope', 'countriesService', function ($scope, countriesService) {

    //init() for controllers that need to perform some initialization.
    init();
    
    function init() {
      $scope.countries = countriesService.getCountries();
    }

  }]);
