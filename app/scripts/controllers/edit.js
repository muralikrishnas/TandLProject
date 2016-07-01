'use strict';

/**
 * @ngdoc function
 * @name sampleApp1App.controller:editCtrl
 * @description
 * # editCtrl
 * Controller of the sampleApp1App
 */

angular.module('sampleApp1App')
  .controller('editCtrl',['$scope', function ($scope) {
    // $(function () {
    //   $('input').iCheck({
    //     checkboxClass: 'icheckbox_square-blue',
    //     radioClass: 'iradio_square-blue',
    //     increaseArea: '20%' // optional
    //   });
    // });
    $scope.phoneNumberPattern = (function() {
      var regexp = /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;
      return {
        test: function(value) {
          if( $scope.requireTel === false ) {
            return true;
          }
          return regexp.test(value);
        }
      };
    })();
    //        $scope.open = function () {
    //
    //   var modalInstance =  $uibModal.open({
    //     templateUrl: 'myModalContent.html',
    //     controller: 'ModalInstanceCtrl'
    //   });
    // };
  }]);
  // .controller('ModalInstanceCtrl',['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
  //
  //   //$scope.searchTerm = term;
  //   $scope.cancel = function() {
  //     $uibModalInstance.dismiss('cancel');
  //   };
  // }]);


