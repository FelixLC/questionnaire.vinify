(function (app) {
  'use strict';

  app.config(function ($stateProvider) {

    $stateProvider.state('domain_list', {
      url: '/liste-domaines',
      views: {
        main: {
          controller: 'domainListCtrl',
          templateUrl: 'winemakers/domain_list/domain_list.tpl.html'
        }
      },
      data: { pageTitle: 'Mes Domaines' }
    });
  });

  app.controller('domainListCtrl', function ($scope) {

  });

})(angular.module('vinibar.winemaker.domain_list', [
  'ui.router'
]));
