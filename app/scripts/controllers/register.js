'use strict';

/**
 * @ngdoc function
 * @name sampleApp1App.controller:registerCtrl
 * @description
 * # registerCtrl
 * Controller of the sampleApp1App
 */

angular.module('sampleApp1App')
  .controller('registerCtrl',function (){
    //$scope.setBodyClass('hold-transition');
    $scope.mobile = "invalid phone number";
  })

.directive('phone', function() {
  var PHONE_REGEXP = /^[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4}$/;
  return {
    restrice: 'A',
    require: 'ngModel',
    link: function($scope, element, attrs, ctrl) {
      angular.element(element).bind('blur', function() {
        var value = this.value;
        if(PHONE_REGEXP.test(value)) {
          // Valid input
          // $scope.mobile = "valid phone number";
          console.log("valid phone number");
          angular.element(this).next().next().css('display','none');
        } else {
          // Invalid input
          // $scope.mobile = "invalid phone number";
          console.log("invalid phone number");
          angular.element(this).next().next().css('display','block');
          
          /*
           Looks like at this point ctrl is not available,
           so I can't user the following method to display the error node:
           ctrl.$setValidity('currencyField', false);
           */
        }
      });
    }
  }
});
