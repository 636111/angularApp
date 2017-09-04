'use strict';

angular
  .module('angularApp')
  .controller('detailController', ['$scope', 'countriesService','$routeParams', function ($scope, countriesService, $routeParams) {

    $scope.getCountryById = function(id) {

      countriesService.getCountries()
        .then(function(response){
          $scope.detailCountry = response.data.Response[id];
          console.log($scope.detailCountry);
        }, function(error){
          $scope.status = 'Unable to load country info: ' + error.message;
        });
      
        //$scope.countries = countriesService.getCountries();
    };

    $scope.getCountryById($routeParams.id);

  }]);
