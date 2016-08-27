// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  var rValidUname = /^([a-z0-9_]{3,20})$/i;

  $scope.signin = function () {
    if ($scope.user.username.match(rValidUname)) {
      Auth.signin($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
      $scope.errMessage = '';
    } else {
      $scope.errMessage = 'Invalid Username or Password';
    }
  };

  $scope.signup = function () {
    if ($scope.user.username.match(rValidUname)) {
      Auth.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      $scope.errMessage = 'Invalid Username or Password';
    }
  };
});
