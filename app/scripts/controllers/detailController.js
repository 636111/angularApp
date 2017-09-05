'use strict';

angular
  .module('angularApp')
  .controller('detailController', ['$scope', 'countriesService','$routeParams', function ($scope, countriesService, $routeParams) {

    $scope.id = parseInt($routeParams.id);
    if (!$scope.id) $scope.id = 0;

    $scope.getCountryById = function(id) {

      countriesService.getCountries()
        .then(function(response){
          $scope.detailCountry = response.data.Response[id];
          $scope.numberCountries = response.data.TotalCount;          
        }, function(error){
          $scope.status = 'Unable to load country info: ' + error.message;
        });
    };

    $scope.getCountryById($scope.id);

    $scope.noPrevious = function() {
      return $scope.id === 0;
    };

    $scope.noNext = function() {
      return $scope.id === $scope.numberCountries-1;
    };
  
    $scope.previousId = function() {
      if ( !$scope.noPrevious() ) {        
        return "#!detail/"+($scope.id-1);
      }
    };

    $scope.nextId = function() {
      if ( !$scope.noNext() ) {        
        return "#!detail/"+($scope.id+1);
      }
    };

  }]);
