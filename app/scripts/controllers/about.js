'use strict';

/**
 * @ngdoc function
 * @name sampleApp1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sampleApp1App
 */
angular.module('sampleApp1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.timeLimit = 20;
  })
.config( function(recorderServiceProvider) {
  //configure here
  recorderServiceProvider
    .forceSwf(window.location.search.indexOf('forceFlash') > -1)
    .setSwfUrl('lib/recorder.swf')
    .withMp3Conversion(true);
});
