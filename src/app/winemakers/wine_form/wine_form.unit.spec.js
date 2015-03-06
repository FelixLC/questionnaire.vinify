describe('wineFormCtrl Controller', function () {
  'use strict';

  var wineFormCtrl,
      Mixpanel,
      WineFactory,
      wine,
      $stateParams,
      $state,
      $scope;

  beforeEach(module('vinibar.winemaker.wine_form'));

  beforeEach(inject(function ($rootScope, $controller, _$state_, _$stateParams_) {
    $scope = $rootScope.$new();
    $state = _$state_;
    $stateParams = _$stateParams_;
    WineFactory = jasmine.createSpyObj('WineFactory', [ 'saveOrUpdate' ]);
    wine = {
      data: { winemaker: 123, svi_profile: {} }
    };

    Mixpanel = jasmine.createSpyObj('Mixpanel', [ 'track' ]);

    spyOn($state, 'go');

    wineFormCtrl = $controller('wineFormCtrl', {
      $scope: $scope,
      Mixpanel: Mixpanel,
      WineFactory: WineFactory,
      $state: $state,
      wine: wine,
      $stateParams: $stateParams
    });
  }));

  it('should have an wineFormCtrl with a populated scope', function () {
    expect(wineFormCtrl).toBeDefined();
    expect($scope).toBeDefined();
    expect($scope.validateWine).toBeDefined();
    expect($scope.wine).toBeDefined();
  });

  it('should save the wine and go to wine form', function () {
    WineFactory.saveOrUpdate.and.callFake(function (wine, success, failure) {
      success({ winemaker: 123 });
    });
    var form = {
      display_name: {
        $invalid: false
      },
      region: {
        $invalid: false
      },
      appellation: {
        $invalid: false
      },
      color: {
        $invalid: false
      },
      vintage: {
        $invalid: false
      },
      variety_1: {
        $invalid: false
      },
      body: {
        $invalid: false
      },
      nature: {
        $invalid: false
      },
      texture: {
        $invalid: false
      }
    };
    $scope.validateWine(wine, form);
    expect($state.go).toHaveBeenCalledWith('winemakers.wine_list', { uuid: 123 });
  });

  it('should track an error', function () {
    WineFactory.saveOrUpdate.and.callFake(function (wine, success, failure) {
      failure();
    });
    var form = {
      display_name: {
        $invalid: false
      },
      region: {
        $invalid: false
      },
      appellation: {
        $invalid: false
      },
      color: {
        $invalid: false
      },
      vintage: {
        $invalid: false
      },
      variety_1: {
        $invalid: false
      },
      body: {
        $invalid: false
      },
      nature: {
        $invalid: false
      },
      texture: {
        $invalid: false
      }
    };
    $scope.validateWine(wine, form);
    expect($state.go).not.toHaveBeenCalled();
    expect(Mixpanel.track).toHaveBeenCalled();
  });

});