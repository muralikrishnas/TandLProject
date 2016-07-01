'use strict';

/**
 * @ngdoc function
 * @name sampleApp1App.controller:topicsCtrl
 * @description
 * # topicsCtrl
 * Controller of the sampleApp1App
 */

angular.module('sampleApp1App')
  .controller('topicsCtrl',function ($scope){
    //$scope.setBodyClass('hold-transition');
    $scope.toggle_visibility = function(){
      alert("test");
      $scope.myvalue = true;
      $scope.myvalue1 = false;
    };
  })
