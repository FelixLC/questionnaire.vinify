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
    expect($scope.goToWineForm).toBeDefined();
  });

  it('should save the winemaker and go to wine form', function () {
    WinemakerFactory.saveOrUpdate.and.callFake(function (winemaker, success, failure) {
      success({ uuid: 123 });
    });
    $scope.goToWineForm(winemaker);
    expect($state.go).toHaveBeenCalledWith('winemakers.wine_form');
    expect(WineFactory.winemaker).toBe(123);
  });

  it('should save the winemaker and go to winemaker list', function () {
    WinemakerFactory.saveOrUpdate.and.callFake(function (winemaker, success, failure) {
      success({ uuid: 123 });
    });
    var form = {
      winemaker_name: {
        $error: false
      },
      region: {
        $error: false
      }
    };
    $scope.validateWinemaker(winemaker, form);
    expect($state.go).toHaveBeenCalled();
  });

  it('should track an error', function () {
    WinemakerFactory.saveOrUpdate.and.callFake(function (winemaker, success, failure) {
      failure();
    });
    var form = {
      winemaker_name: {
        $error: false
      },
      region: {
        $error: false
      }
    };
    $scope.goToWineForm(winemaker);
    expect($state.go).not.toHaveBeenCalled();
    expect(Mixpanel.track).toHaveBeenCalled();
    $scope.validateWinemaker(winemaker, form);
    expect($state.go).not.toHaveBeenCalled();
    expect(Mixpanel.track).toHaveBeenCalled();
  });



});