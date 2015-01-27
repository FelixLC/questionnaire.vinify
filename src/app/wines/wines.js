angular.module('vinibar.wines', [
  'ui.router',
  'wineResource'
])

.config(function config ($stateProvider) {
  $stateProvider
    .state('wines', {
      url: '/vin?pc',
      views: {
        main: {
          controller: 'winesCtrl',
          templateUrl: 'wines/wines.tpl.html'
        }
      },
      resolve: {
        wine: function ($stateParams, wineResource) {
          return wineResource.get($stateParams.pc);
        }
      },
      data: function ($stateParams, wineResource) {
        wineResource.get($stateParams.pc)
          .success(function (response) {
            return { pageTitle: response.data.display_name + response.data.region };
          })
          .error(function (response) {
            return { pageTitle: 'Gamme Vinify' };
          });
      }
    });
})

.controller('winesCtrl', function winesCtrl ($scope, wine) {
  $scope.wine = wine.data[0];
});
