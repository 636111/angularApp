'use strict';

angular
  .module('angularApp')
  .controller('paginationController', ['$scope', function ($scope) {

    $scope.$watch('numPages', function(value) {
        $scope.pages = [];

        for(var i=1;i<=value;i++) {
            $scope.pages.push(i);
        }
        if ( $scope.currentPage > value ) {
            $scope.selectPage(value);
        }
    });

    $scope.showPage = function(page) {
        var min = -3,
            max = 3;
        
        return ($scope.currentPage >= page+min && $scope.currentPage <= page+max);
    };

    $scope.noPrevious = function() {
        return $scope.currentPage === 1;
    };

    $scope.noNext = function() {
        return $scope.currentPage === $scope.numPages;
    };

    $scope.isActive = function(page) {
        return $scope.currentPage === page;
    };
  
    $scope.selectPage = function(page) {
        if ( !$scope.isActive(page) ) {
            $scope.currentPage = page;
            $scope.onSelectPage({ page: page });
        }
    };
  
    $scope.selectPrevious = function() {
        console.log("currentPage "+$scope.currentPage);
        
        if ( !$scope.noPrevious() ) {
            console.log("noPrevious");
            $scope.selectPage($scope.currentPage-1);
        }
    };

    $scope.selectNext = function() {
        console.log($scope.noNext());
        if ( !$scope.noNext() ) {
            $scope.selectPage($scope.currentPage+1);
        }
    };
  }]);
