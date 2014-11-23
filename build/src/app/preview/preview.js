angular.module('vinibar.preview', [
  'ui.router',
  'ui.bootstrap',
  'Resources',
  'clientFactory'
])

.config(function config ($stateProvider) {
  $stateProvider
    .state('preview', {
      url: '/apercu',
      views: {
        main: {
          controller: 'previewCtrl',
          templateUrl: 'preview/preview.tpl.html'
        }
      },
      data: { pageTitle: 'Ma sélection personnalisée' }
    });
})

.controller('previewCtrl', function previewCtrl (Recommender, $scope, currentClient, $state) {
  $scope.hover = {
    wine_1: false,
    wine_2: false,
    wine_3: false
  };
  $scope.preview = Recommender.getPreview();
  $scope.order = function (type) {
    mixpanel.track('Chose ' + type);
    currentClient.currentClient.order_type = type;
    currentClient.currentClient.order_uuid = Recommender.getUuid();
    $state.go('order.userinfos');
  };
});
