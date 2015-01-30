angular.module('vinibar.wines', [
  'ui.router',
  'wineResource'
])

.config(function config ($stateProvider) {
  $stateProvider
    .state('wines', {
      url: '/vin/:slug',
      views: {
        main: {
          controller: 'winesCtrl',
          templateUrl: 'wines/wines.tpl.html'
        }
      },
      resolve: {
        wine: function ($stateParams, wineResource) {
          return wineResource.get($stateParams.slug);
        }
      }
    });
})

.controller('winesCtrl', function winesCtrl ($scope, $rootScope, wine) {
  $scope.wine = wine.data[0];
  $rootScope.PageTitle.setTitle($scope.wine.display_name + ' ' + $scope.wine.region + ' ' + $scope.wine.color);
  $rootScope.Description.setMetaDescription($scope.wine.domain);
  $rootScope.Description.setMetaKeywords($scope.wine.variety + ', ' + $scope.wine.food + ', ' + $scope.wine.meat_fish);
  $rootScope.Description.setMetaUrl('https://start.vinify.co/#!/vin/' + $scope.wine.slug);
  $rootScope.Description.setMetaImage('https://start.vinify.co/assets/wines/' + $scope.wine.product_code + '.jpg');
});
