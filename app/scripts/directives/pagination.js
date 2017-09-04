'use strict';

angular
  .module('angularApp')
  .directive('pagination', function () {
      return {
          restrict: 'E',
          scope: {
            numPages: '=',
            currentPage: '=',
            onSelectPage: '&'
          },
          controller: 'paginationController',
          templateUrl: '../../views/pagination.html'
      }
  });
