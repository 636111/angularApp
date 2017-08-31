'use strict';

angular
  .module('angularApp')
  .directive('countryInfo', function () {
      return {
          restrict: 'E',
          scope: {
              country: '='
          },
          templateUrl: '../../views/country-info.html'
      }
  });
