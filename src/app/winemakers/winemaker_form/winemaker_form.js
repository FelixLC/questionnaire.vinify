(function (app) {
  'use strict';

  app.config(function ($stateProvider) {

    $stateProvider.state('winemaker_form', {
      url: '/domaine/:uuid',
      views: {
        main: {
          controller: 'wineMakerFormCtrl',
          templateUrl: 'winemakers/winemaker_form/winemaker_form.tpl.html'
        }
      },
      resolve: {
        winemaker: function (WinemakerFactory, $stateParams) {
          return WinemakerFactory.getOrCreate($stateParams.uuid);
        }
      },
      data: { pageTitle: 'Mon Domaine' }
    });
  });

  app.controller('wineMakerFormCtrl', function ($scope, $state, $stateParams, Mixpanel, WinemakerFactory, WineFactory,  winemaker) {

    $scope.winemaker = winemaker;

    $scope.validateWinemaker = function (winemaker) {
      WinemakerFactory.saveOrUpdate(winemaker,
        function (_winemaker) {
          WineFactory.winemaker = _winemaker.uuid;
          $state.go('wine_form');
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
