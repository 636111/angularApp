'use strict';

angular
  .module('angularApp')
  .controller('countriesController', ['$scope', 'countriesService', function ($scope, countriesService) {

    $scope.status;
    $scope.countries;

    getCountries();
    
    function getCountries() {
      countriesService.getCountries()
        .then(function(response){
          $scope.countries =  response.data.Response;
        }, function(error){
          $scope.status = 'Unable to load countries data: ' + error.message;
        });
    };

    function getCountryByName(name) {
      for (var i=0; i<$scope.countries.lenght; i++) {
          if ($scope.countries[i].Name == name)
              return $scope.countries[i];
      }
    };
    
  }]);
