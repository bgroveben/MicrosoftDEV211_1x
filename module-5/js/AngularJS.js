var app = angular.module('sampleApp', []);
app.controller('sampleController', function($scope) {
  $scope.value = 1;
  $scope.increment = function() {
    $scope.value++;
  };
});
