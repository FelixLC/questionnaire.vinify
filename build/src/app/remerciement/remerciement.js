angular.module('vinibar.remerciement', [
  'ui.router',
  'ui.bootstrap',
  'ngAutocomplete'
])

.config(function config ($stateProvider) {
  $stateProvider.state('remerciement', {
    url: '/remerciement',
    views: {
      main: {
        controller: 'remerciementCtrl',
        templateUrl: 'remerciement/remerciement.tpl.html'
      }
    },
    data: { pageTitle: 'remerciement' }
  });
})

.controller('remerciementCtrl', function remerciementCtrl ($timeout, $window, $scope, $http, $location, User) {

  $scope.user = {};
  $timeout(function () { $window.location.href = 'http://facebook.com/vinify.co';}, 10000);

});