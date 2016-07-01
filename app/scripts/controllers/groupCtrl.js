'use strict';

/**
 * @ngdoc function
 * @name sampleApp1App.controller:parentCtrl
 * @description
 * # groupCtrl
 * Controller of the sampleApp1App
 */

angular.module('sampleApp1App')
  .controller('groupCtrl',function ($scope, $http){
    var url = "scripts/json/addChild.json";

    $http.get(url).success( function(response) {
      $scope.students = response;
      console.log(response);
    });
  });
