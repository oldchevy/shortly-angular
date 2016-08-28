angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

  $scope.loading = false;
  $scope.link = {};

  $scope.checkUrl = function(url) {
    var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i; 

    if (!url) {
      return '';
    } else {
      return (url.match(rValidUrl) ? '' : 'Invalid URL');
    }
  };

  $scope.addLink = function() {
    console.log('Loading scoped var: ', $scope.loading);
    $scope.loading = true;
    Links.addOne(JSON.stringify({url: $scope.newLink}))
    .then(function() {
      $scope.loading = false;
      $location.path('/links');
    });
    $scope.errMessage = '';
  };


});
