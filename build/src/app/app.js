angular.module( 'vinibar', [
  'templates-app',
  'templates-common',
  'vinibar.commander',
  'vinibar.offrir',
  'vinibar.mondialrelay',
  'vinibar.order',
  'vinibar.questionnaire',
  'vinibar.paiement',
  'vinibar.remerciement',
  'vinibar.remerciement_order',
  'ui.router',
  'ui.route',
  'ngAnimate',
  'clientFactory'
])

.config( ["$stateProvider", "$urlRouterProvider", function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/questionnaire/coffee' );
}])

.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    }
])

.run( function run () {
})

.controller( 'AppCtrl', ["$scope", "$location", function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | vinibar' ;
    }
  });
}])

.factory('User', [function () {

  return {
    currentUser: {},
    getCurrentUser: function (argument) {
      // body...
    },
    resetCurrentUser: function (argument) {
      currentUser = null;
    }

  };
}]);