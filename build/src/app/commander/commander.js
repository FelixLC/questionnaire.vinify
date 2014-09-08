angular.module( 'vinibar.commander', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ngAutocomplete'
])

.config(["$stateProvider", function config( $stateProvider ) {
  $stateProvider.state( 'commander', {
    url: '/commander',
    views: {
      "main": {
        controller: 'commanderCtrl',
        templateUrl: 'commander/commander.tpl.html'
      }
    },
    data:{ pageTitle: 'Commander' }
  });
}])

.controller( 'commanderCtrl', ["$scope", "$http", "$location", function commanderCtrl( $scope, $http, $location ) {

  $scope.user = {};
  $scope.identical = true;

  $scope.Send = function(user) {

    var request = $http({
                          url: '/infos/',
                          method: 'POST',
                          data: user,
                          headers: {
                            'Content-Type': 'application/json; charset=UTF-8'
                          }
                        })

                        .success(function(data, status, headers, config) {
                              $location.path('/questionnaire');
                          });

        return request;
  };


}]);
