describe('wineMakerFormCtrl Controller', function () {
  'use strict';

  var wineMakerFormCtrl,
      Mixpanel,
      WinemakerFactory,
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
    WinemakerFactory = jasmine.createSpyObj('WinemakerFactory', [ 'saveOrUpdate' ]);

    WineFactory = {};
    winemaker = {};

    Mixpanel = jasmine.createSpyObj('Mixpanel', [ 'track' ]);

    spyOn($state, 'go');

    wineMakerFormCtrl = $controller('wineMakerFormCtrl', {
      $scope: $scope,
      Mixpanel: Mixpanel,
      WinemakerFactory: WinemakerFactory,
      WineFactory: WineFactory,
      $state: $state,
      winemaker: winemaker,
      $stateParams: $stateParams
    });
  }));

  it('should have an wineMakerFormCtrl with a populated scope', function () {
    expect(wineMakerFormCtrl).toBeDefined();
    expect($scope).toBeDefined();
    expect($scope.validateWinemaker).toBeDefined();
  });

  it('should save the winemaker and go to wine form', function () {
    WinemakerFactory.saveOrUpdate.and.callFake(function (winemaker, success, failure) {
      success({ uuid: 123 });
    });
    $scope.validateWinemaker(winemaker);
    expect($state.go).toHaveBeenCalled();
    expect(WineFactory.winemaker).toBe(123);
  });

  it('should track an error', function () {
    WinemakerFactory.saveOrUpdate.and.callFake(function (winemaker, success, failure) {
      failure();
    });
    $scope.validateWinemaker(winemaker);
    expect($state.go).not.toHaveBeenCalled();
    expect(Mixpanel.track).toHaveBeenCalled();
  });



});