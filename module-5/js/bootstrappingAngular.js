var app = angular.module('basicApp', []);
app.controller('homeController', function($scope) {
  $scope.username = "Demo User";
  $scope.testMe = function() {
    $scope.username += " You clicked the button.";
  };
});
