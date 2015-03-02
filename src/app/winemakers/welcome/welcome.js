(function (app) {
  'use strict';

  app.config(function ($stateProvider) {

    $stateProvider.state('welcome_winemaker', {
      url: '/vignerons-bienvenue',
      views: {
        main: {
          controller: 'welcomeWinemakerCtrl',
          templateUrl: 'winemakers/welcome/welcome.tpl.html'
        }
      },
      data: { pageTitle: 'Salon des Vignerons Indépendants' }
    });
  });

  app.controller('welcomeWinemakerCtrl', function ($scope, $state, DomainResource, Mixpanel, Domains) {

    $scope.query = function (email) {

      DomainResource.query({ email: email },
        function (domainList) {
          if (domainList.length) {
            Mixpanel.identify(email);
            Domains.setDomains(domainList);
            $state.go('domain_list');
          } else {
            Mixpanel.alias(email);
            $state.go('winemaker_form');
          }
        },
        function (error) {
          $state.go('winemaker_form');
          Mixpanel.alias(email);
        });
    };
  });

})(angular.module('vinibar.winemaker.welcome', [
  'vinibar.resources.domain',
  'vinibar.winemakers.domains',
  'ui.router',
  'Mixpanel'
]));
