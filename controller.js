(function() {
  'use strict';

  angular
    .module('helloworld', [])
    .controller('helloWorldController', loadFunction);

  loadFunction.$inject = ['$scope', 'structureService', '$location'];

  function loadFunction($scope, structureService, $location) {
    //Register upper level modules
    structureService.registerModule($location, $scope, 'helloworld');
  }

}());
