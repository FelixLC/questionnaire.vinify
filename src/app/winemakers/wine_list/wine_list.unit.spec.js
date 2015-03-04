describe('wineListCtrl Controller', function () {
  'use strict';

  var wineListCtrl,
      Mixpanel,
      WineFactory,
      winemaker,
      $stateParams,
      $state,
      $scope;

  beforeEach(module('vinibar.winemaker.winemaker_form'));

  beforeEach(inject(function ($rootScope, $controller, _$state_, _$stateParams_) {
    $scope = $rootScope.$new();
    $state = _$state_;
    $stateParams = _$stateParams_;

    WineFactory = {};

    winemaker = {
      uuid: 123
    };

    // Mixpanel = jasmine.createSpyObj('Mixpanel', [ 'track' ]);

    spyOn($state, 'go');

    wineListCtrl = $controller('wineListCtrl', {
      $scope: $scope,
      Mixpanel: Mixpanel,
      WineFactory: WineFactory,
      $state: $state,
      winemaker: winemaker
    });
  }));

  it('should have an wineListCtrl with a populated scope', function () {
    expect(wineListCtrl).toBeDefined();
    expect($scope).toBeDefined();
    expect($scope.modifyWinemaker).toBeDefined();
    expect($scope.modifyWine).toBeDefined();
    expect($scope.validate).toBeDefined();
    expect($scope.winemaker).toBeDefined();
  });

  it('should go to winemaker form', function () {
    $scope.modifyWinemaker(winemaker);
    expect($state.go).toHaveBeenCalledWith('winemakers.winemaker_form', { uuid: 123 });
  });

  it('should go to wine form', function () {
    $scope.modifyWine({ uuid: 321 });
    expect($state.go).toHaveBeenCalledWith('winemakers.wine_form', { uuid: 321 });
  });

  it('should go to thanks', function () {
    $scope.validate();
    expect($state.go).toHaveBeenCalledWith('winemakers.winemaker_thanks');
  });



});