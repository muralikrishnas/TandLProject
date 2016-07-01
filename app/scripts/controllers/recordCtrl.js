'use strict';

/**
 * @ngdoc function
 * @name sampleApp1App.controller:parentCtrl
 * @description
 * # recordCtrl
 * Controller of the sampleApp1App
 */

angular.module('sampleApp1App')
  .controller('recordCtrl',function ($scope,$timeout){
  	//$scope.setBodyClass('hold-transition');
    $scope.timeLimit = 20;
  })
  .config( function(recorderServiceProvider) {
    //configure here
    recorderServiceProvider
    .forceSwf(window.location.search.indexOf('forceFlash') > -1)
      .setSwfUrl('lib/recorder.swf')
      .withMp3Conversion(true);
  });
