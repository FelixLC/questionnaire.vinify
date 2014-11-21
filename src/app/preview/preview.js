angular.module( 'vinibar.preview', [
  'ui.router',
  'ui.bootstrap',
  'Resources',
  'clientFactory',
  'toaster'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'preview', {
      url: '/apercu',
      views: {
        "main": {
          controller: 'previewCtrl',
          templateUrl: 'preview/preview.tpl.html'
        }
      },
      data:{ pageTitle: 'Ma sélection personnalisée' }
    });
})
.constant('API_ENDPOINT','https://api.vinify.co/api')
.controller( 'previewCtrl', function previewCtrl( Recommender, $scope, $http, currentClient, $state, $rootScope, API_ENDPOINT, toaster) {
  $scope.hover = {
    wine_1: false,
    wine_2: false,
    wine_3: false
  };
  $scope.preview = Recommender.getPreview();
  $scope.order = function(type) {
    mixpanel.track('Chose ' + type);
    currentClient.currentClient.order_type = type;
    currentClient.currentClient.order_uuid = Recommender.getUuid();
    $state.go('order.userinfos');
  };
});
