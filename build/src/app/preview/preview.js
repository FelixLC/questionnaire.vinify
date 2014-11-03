angular.module( 'vinibar.preview', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'Resources',
  'clientFactory',
  'toaster'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'preview', {
      url: '/preview',
      views: {
        "main": {
          controller: 'previewCtrl',
          templateUrl: 'preview/preview.tpl.html'
        }
      },
      data:{ pageTitle: 'Ma sélection personnalisée' }
    });
})
.constant('API_ENDPOINT','http://127.0.0.1:8000/api')
.controller( 'previewCtrl', function previewCtrl( Recommender, $scope, $http, $location, currentClient, $state, $rootScope, API_ENDPOINT, toaster ) {
  $scope.hover = {
    wine_1: false,
    wine_2: false,
    wine_3: false
  };
  $scope.preview = Recommender.getPreview();
});
