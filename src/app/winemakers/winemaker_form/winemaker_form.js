(function (app) {
  'use strict';

  app.config(function ($stateProvider) {

    $stateProvider.state('winemakers.winemaker_form', {
      url: '/domaine/:uuid',
      controller: 'wineMakerFormCtrl',
      templateUrl: 'winemakers/winemaker_form/winemaker_form.tpl.html',
      resolve: {
        winemaker: function (WinemakerFactory, $stateParams) {
          return WinemakerFactory.getOrCreate($stateParams.uuid);
        }
      },
      data: { pageTitle: 'Mon Domaine', navTitle: 'Mon Domaine' }
    });
  });

  app.controller('wineMakerFormCtrl', function ($scope, $state, $stateParams, Mixpanel, WinemakerFactory, WineFactory,  winemaker) {

    $scope.winemaker = winemaker.data;

    $scope.goToWineForm = function (winemaker) {
      WinemakerFactory.saveOrUpdate(winemaker,
        function (_winemaker) {
          WineFactory.region = winemaker.region;
          WineFactory.appellation = winemaker.appellation;
          WineFactory.winemaker_name = winemaker.winemaker_name;
          WineFactory.winemaker = _winemaker.uuid;
          $state.go('winemakers.wine_form');
        },
        function (error) {
          Mixpanel.track('Error trying to save winemaker : ' + $stateParams.email);
        });
    };

    $scope.validateWinemaker = function (winemaker) {
      WinemakerFactory.saveOrUpdate(winemaker,
        function (_winemaker) {
          $state.go('winemakers.winemaker_list');
        },
        function (error) {
          Mixpanel.track('Error trying to save winemaker : ' + $stateParams.email);
        });
    };

  });

})(angular.module('vinibar.winemaker.winemaker_form', [
  'vinibar.winemakers.factory',
  'vinibar.wines.factory',
  'ui.router',
  'Mixpanel'
]));
