describe('questionnaireCtrl', function () {
  var questionnaireCtrl, mixpanel, $location, $scope;

  beforeEach(module('vinibar'));

  beforeEach(inject(function (
    $controller,
    _$rootScope_,
    _$document_,
    _$http_,
    _$location_,
    _$state_,
    _$timeout_,
    _$window_,
    _$stateParams_
  ) {
    $scope = _$rootScope_.$new();
    questionnaireCtrl = $controller('questionnaireCtrl', {
      $location: _$location_,
      $scope: $scope,
      $rootScope: _$rootScope_,
      $document: _$document_,
      $http: _$http_,
      $state: _$state_,
      $timeout: _$timeout_,
      $window: _$window_,
      $stateParams: _$stateParams_
    });
  }));

  // it('should pass a dummy test', inject(function () {
  //   expect(questionnaireCtrl).toBeTruthy();
  //   expect($scope.is).toBeDefined();
  // }));
});