angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  Links.getAll().then(function(res) {
    $scope.data.links = res;
  });

  $scope.getLinks = Links.getAll;


});
