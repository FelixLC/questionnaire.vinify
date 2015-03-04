(function (app) {
  'use strict';

  app.config(function ($stateProvider) {

    $stateProvider.state('winemakers.winemaker_list', {
      url: '/liste-domaines',
      controller: 'winemakerListCtrl',
      templateUrl: 'winemakers/winemaker_list/winemaker_list.tpl.html',
      resolve: {
        winemakers: function (WinemakerResource, currentWinemaster) {
          return WinemakerResource.query({ email: currentWinemaster.email });
        }
      },
      data: { pageTitle: 'Mes Domaines' , navTitle: 'Mes Domaines' }
    });
  });

  app.controller('winemakerListCtrl', function ($scope, winemakers, $state) {
    $scope.winemakers = winemakers;

    $scope.modifyWinemaker = function (winemaker) {
      $state.go('winemakers.wine_list', { uuid: winemaker.uuid });
    };

    $scope.wineList = function (winemaker) {
      $state.go('winemakers.wine_list', { uuid: winemaker.uuid });
    };

    $scope.validate = function () {
      $state.go('winemakers.winemaker_thanks');
    };
  });

})(angular.module('vinibar.winemaker.winemaker_list', [
  'vinibar.winemakers',
  'vinibar.resources.winemaker',
  'ui.router'
]));
