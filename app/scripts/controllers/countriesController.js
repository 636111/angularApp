'use strict';

angular
  .module('angularApp')
  .controller('countriesController', ['$scope', 'countriesService', function ($scope, countriesService) {

    $scope.getCountries = function() {
      
      countriesService.getCountries()
        .then(function(response){
          $scope.countries = response.data.Response;
          $scope.numberCountries = response.data.TotalCount;

          /* Pagination */
          $scope.numPerPage = 5;
          $scope.noOfPages = Math.ceil($scope.numberCountries / $scope.numPerPage);
          $scope.currentPage = 1;
      
          $scope.setPage = function () {
            $scope.data = $scope.countries.slice(($scope.currentPage - 1) * $scope.numPerPage, (($scope.currentPage - 1) * $scope.numPerPage) + $scope.numPerPage);
          };
          
          $scope.$watch('currentPage', $scope.setPage);
        }, function(error){
          $scope.status = 'Unable to load countries data: ' + error.message;
        });
      
      //$scope.countries = countriesService.getCountries();
      
    };

    $scope.getCountries();

  }]);
