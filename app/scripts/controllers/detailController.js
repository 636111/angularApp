'use strict';

angular
  .module('angularApp')
  .controller('detailController', ['$scope', 'countriesService', function ($scope, countriesService) {

    $scope.getCountryById = function(id) {

      countriesService.getCountries()
        .then(function(response){
          $scope.detailCountry = response.data.Response[id];
        }, function(error){
          $scope.status = 'Unable to load country info: ' + error.message;
        });
      
        //$scope.countries = countriesService.getCountries();
    }

  }]);
