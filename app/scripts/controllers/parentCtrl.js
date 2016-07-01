/**
 * Created by spandanak on 6/20/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name sampleApp1App.controller:parentCtrl
 * @description
 * # parentCtrl
 * Controller of the sampleApp1App
 */

angular.module('sampleApp1App')
  .controller('parentCtrl',function ($scope, $http){
    var url = "scripts/json/parent_home_details.json";

    $http.get(url).success( function(response) {
      $scope.studentDetails = response;

    });
    $scope.collapseOne = false;

    $scope.test = function(){
        $scope.collapseOne = !$scope.collapseOne;

    };

    $scope.hoverIn = function(){
      $scope.hoverEdit = true;
    };
    $scope.hoverOut = function(){
      $scope.hoverEdit = false;
    };

  });
