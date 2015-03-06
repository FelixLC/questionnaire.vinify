(function (app) {
  'use strict';

  app.config(function ($stateProvider) {

    $stateProvider.state('winemakers.wine_list', {
      url: '/liste-vins/:uuid',
      controller: 'wineListCtrl',
      templateUrl: 'winemakers/wine_list/wine_list.tpl.html',
      resolve: {
        winemaker: function (WinemakerResource, $stateParams) {
          return WinemakerResource.get({ uuid: $stateParams.uuid });
        }
      },
      data: { pageTitle: 'Mes Vins', navTitle: 'Mes Vins' }
    });
  });

  app.controller('wineListCtrl',
    function ($scope,
                        $state,
                        $stateParams,
                        winemaker,
                        WineFactory,
                        currentWinemaster,
                        WinemakerResource,
                        $modal,
                        $window) {

    $scope.winemaker = winemaker;

    $scope.modifyWinemaker = function (winemaker) {
      $state.go('winemakers.winemaker_form', { uuid: winemaker.uuid });
    };

    $scope.modifyWine = function (wine) {
      WineFactory.winemaker = winemaker.uuid;
      $state.go('winemakers.wine_form', { uuid: wine.uuid });
    };

    $scope.addWine = function () {
      WineFactory.winemaker = winemaker.uuid;
      WineFactory.region = winemaker.region;
      WineFactory.appellation = winemaker.appellation;
      WineFactory.winemaker_name = winemaker.winemaker_name;
      $state.go('winemakers.wine_form');
    };

    $scope.deleteWine = function (wine) {
      if ($window.confirm("Attention, cette action est irréversible")) {
        WineFactory.remove(wine,
          function (success) {
            WinemakerResource.get({ uuid: $stateParams.uuid },
              function (response) {
                $scope.winemaker = response;
              },
              function (error) {

              });
          },
          function (error) {

          });
      }
    };

    $scope.duplicateWine = function (wine) {
      WineFactory.duplicate(wine,
        function (success) {
          WinemakerResource.get({ uuid: $stateParams.uuid },
            function (response) {
              $scope.winemaker = response;
            },
            function (error) {

            });
        },
        function (error) {

        });
    };

    $scope.validate = function () {
      $state.go('winemakers.winemaker_thanks');
    };

    $scope.open = function (_wine) {

      var modalInstance = $modal.open({
        templateUrl: 'winemakers/wine_list/vintage.modal.tpl.html',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        resolve: {
          wine: function () {
            return _wine;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {

      });

    };
  });

  app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, wine, WineFactory) {

    $scope.wine = wine;


    $scope.ok = function (vintage) {
      WineFactory.duplicate($scope.wine, vintage,
        function () {
          WinemakerResource.get({ uuid: $stateParams.uuid },
            function (response) {
              $modalInstance.close();
              $scope.winemaker = response;
            },
            function (error) {

            });
        },
        function () {
          Mixpanel.track('Error trying to duplicate wine');
          $modalInstance.close();
        });
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });

})(angular.module('vinibar.winemaker.wine_list', [
  'vinibar.resources.winemaker',
  'vinibar.wines.factory',
  'ui.bootstrap',
  'ui.router'
]));