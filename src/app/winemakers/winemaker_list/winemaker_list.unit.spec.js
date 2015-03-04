describe('winemakerListCtrl Controller', function () {
  'use strict';

  var winemakerListCtrl,
      Mixpanel,
      WineFactory,
      winemakers,
      $stateParams,
      $state,
      $scope;

  beforeEach(module('vinibar.winemaker.winemaker_form'));

  beforeEach(inject(function ($rootScope, $controller, _$state_) {
    $scope = $rootScope.$new();
    $state = _$state_;

    winemakers = {
      uuid: 123
    };

    // Mixpanel = jasmine.createSpyObj('Mixpanel', [ 'track' ]);

    spyOn($state, 'go');

    winemakerListCtrl = $controller('winemakerListCtrl', {
      $scope: $scope,
      $state: $state,
      winemakers: winemakers
    });
  }));

  it('should have an winemakerListCtrl with a populated scope', function () {
    expect(winemakerListCtrl).toBeDefined();
    expect($scope).toBeDefined();
    expect($scope.modifyWinemaker).toBeDefined();
    expect($scope.wineList).toBeDefined();
    expect($scope.validate).toBeDefined();
    expect($scope.winemakers).toBeDefined();
  });

  it('should go to winemaker form', function () {
    $scope.modifyWinemaker({ uuid: 123 });
    expect($state.go).toHaveBeenCalledWith('winemakers.wine_list', { uuid: 123 });
  });

  it('should go to wineList form', function () {
    $scope.wineList({ uuid: 321 });
    expect($state.go).toHaveBeenCalledWith('winemakers.wine_list', { uuid: 321 });
  });

  it('should go to thanks', function () {
    $scope.validate();
    expect($state.go).toHaveBeenCalledWith('winemakers.winemaker_thanks');
  });



});