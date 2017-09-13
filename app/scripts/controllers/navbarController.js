'use strict';

angular
  .module('angularApp')
  .controller('navbarController', ['$scope', function ($scope) {

    $scope.menuItems = ['Home', 'Detail', 'Contact'];
    $scope.activeMenu = $scope.menuItems[0];

    $scope.setActive = function(menuItem) {
      $scope.activeMenu = menuItem
    }

  }]);
