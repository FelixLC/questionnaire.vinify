angular.module('vinibar.preview', [
  'ui.router',
  'ui.bootstrap',
  'Resources',
  'clientFactory',
  'Mixpanel'
])

.config(["$stateProvider", function config ($stateProvider) {
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
}])

.controller('previewCtrl', ["Mixpanel", "Recommender", "$scope", "currentClient", "$state", function previewCtrl (Mixpanel, Recommender, $scope, currentClient, $state) {
  $scope.hover = {
    wine_1: false,
    wine_2: false,
    wine_3: false
  };
  $scope.preview = Recommender.getPreview();
  $scope.order = function (type) {
    Mixpanel.track('Selected ' + type);
    currentClient.currentClient.order_type = type;
    currentClient.currentClient.order_uuid = Recommender.getUuid();
    $state.go('order.userinfos');
  };
}]);
