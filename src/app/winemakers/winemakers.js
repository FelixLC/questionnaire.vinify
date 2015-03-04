(function () {
  'use strict';

  angular
      .module('vinibar.winemakers', [
        'vinibar.winemaker.winemaker_list',
        'vinibar.winemaker.winemaker_form',
        'vinibar.winemaker.thanks',
        'vinibar.winemaker.welcome',
        'vinibar.winemaker.wine_form',
        'vinibar.winemaker.wine_list',
        'vinibar.winemaker.wine_list'
      ])
      .config(function ($stateProvider) {
        $stateProvider.state('winemakers', {
          url: '/salon-vignerons-independants',
          views: {
            main: {
              controller: 'wineMakersCtrl',
              templateUrl: 'winemakers/winemakers.tpl.html'
            }
          }
        });
      })
      // .run(function (currentWinemaster, $state) {
      //   if (!currentWinemaster.email) {
      //     $state.go('winemakers.welcome');
      //   }
      // })
      .controller('wineMakersCtrl', function ($scope, $state, currentWinemaster) {
        $scope.navbarTitle = $state.current.data.navTitle;
        if (!currentWinemaster.email) {
          $state.go('winemakers.welcome');
        }
      })
      .factory('currentWinemaster', currentWinemaster);

  /* @ngInject */
  function currentWinemaster () {
    return {
      ermail: null
    };
  }
})();