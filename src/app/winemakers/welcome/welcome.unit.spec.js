describe('welcomeWinemakerCtrl Controller', function () {
  'use strict';

  var welcomeWinemakerCtrl,
      Mixpanel,
      WinemakerResource,
      WinemakerFactory,
      $scope;

  beforeEach(module('vinibar.winemaker.welcome'));
  beforeEach(module('vinibar.mockresources.domain'));

  beforeEach(inject(function ($rootScope, $controller, _$state_, WinemakerMockResource) {
    $scope = $rootScope.$new();
    $state = _$state_;

    WinemakerResource = WinemakerMockResource;
    WinemakerFactory = jasmine.createSpyObj('WinemakerFactory', [ 'setWinemakers' ]);
    Mixpanel = jasmine.createSpyObj('Mixpanel', [ 'alias', 'identify' ]);

    spyOn($state, 'go');

    welcomeWinemakerCtrl = $controller('welcomeWinemakerCtrl', {
      $scope: $scope,
      Mixpanel: Mixpanel,
      WinemakerFactory: WinemakerFactory,
      WinemakerResource: WinemakerResource,
      $state: $state
    });
  }));

  it('should have an welcomeWinemakerCtrl with a populated scope', function () {
    expect(welcomeWinemakerCtrl).toBeDefined();
    expect($scope).toBeDefined();
    expect($scope.query).toBeDefined();
  });

  it('should query the list, identify setWinemakers and go to winemaker_list', function () {
    spyOn(WinemakerResource, 'query').and.callFake(function (id, success, failure) {
      success([ 'Domain', 'domain' ]);
    });

    $scope.query('felix.lechevallier@gmail.com');
    expect(Mixpanel.identify).toHaveBeenCalledWith('felix.lechevallier@gmail.com');
    expect(WinemakerFactory.setWinemakers).toHaveBeenCalledWith([ 'Domain', 'domain' ]);
    expect($state.go).toHaveBeenCalledWith('winemaker_list');
  });

  it('should query the list, alias and go to winemaker_form', function () {
    spyOn(WinemakerResource, 'query').and.callFake(function (id, success, failure) {
      success([]);
    });

    $scope.query('felix.lechevallier@gmail.com');
    expect(Mixpanel.alias).toHaveBeenCalledWith('felix.lechevallier@gmail.com');
    expect(WinemakerFactory.setWinemakers).not.toHaveBeenCalled();
    expect($state.go).toHaveBeenCalledWith('winemaker_form');
  });

  it('should query the list, alias and go to winemaker_form', function () {
    spyOn(WinemakerResource, 'query').and.callFake(function (id, success, failure) {
      failure([]);
    });

    $scope.query('felix.lechevallier@gmail.com');
    expect(Mixpanel.alias).toHaveBeenCalledWith('felix.lechevallier@gmail.com');
    expect(WinemakerFactory.setWinemakers).not.toHaveBeenCalled();
    expect($state.go).toHaveBeenCalledWith('winemaker_form');
  });



});