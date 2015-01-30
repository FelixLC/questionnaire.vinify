angular.module('vinibar', [
  'templates-app',
  'templates-common',
  'vinibar.pay_mobile',
  'vinibar.gift',
  'vinibar.gift_card',
  'mondialrelay',
  'vinibar.order',
  'vinibar.questionnaire',
  'vinibar.contest',
  'vinibar.preview',
  'vinibar.paiement',
  'vinibar.welcome',
  'vinibar.receive',
  'vinibar.wines',
  'vinibar.remerciement',
  'vinibar.remerciement_order',
  'vinibar.remerciement_mobile',
  'ui.router',
  'params',
  'Meta',
  'settings',
  'Mixpanel',
  'ngAnimate',
  'clientFactory'
])

.config(function myAppConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
  // $locationProvider.html5Mode(true).hashPrefix('!');
  // $locationProvider.hashPrefix('!');
  $urlRouterProvider.otherwise('/demarrer');
})

// We'll intercept all request and put the token in it
.factory('authInterceptor', function ($rootScope, $q, $window, $location) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if ($window.sessionStorage.token) {
        config.headers.Authorization = 'Token ' + $window.sessionStorage.token;
      }
      return config;
    },
    response: function (response) {
      if (response.status === 401) {
        // handle the case where the user is not authenticated
      }
      return response || $q.when(response);
    }
  };
})
.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
})

.config([ '$httpProvider', function ($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
} ])

.controller('AppCtrl', function AppCtrl ($scope, $rootScope, $location, settings, PageTitle, Description) {
  $rootScope.PageTitle = PageTitle;
  $rootScope.Description = Description;
  $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    if (angular.isDefined(toState.data) && angular.isDefined(toState.data.pageTitle)) {
      PageTitle.setTitle(toState.data.pageTitle + ' | vinibar');
    }
  });
  console.log(settings.apiEndPoint);
})

.factory('User', [ function () {

  return {
    currentUser: {},
    getCurrentUser: function (argument) {
      // body...
    },
    resetCurrentUser: function (argument) {
      currentUser = null;
    },
    isMobile: false
  };
}]);