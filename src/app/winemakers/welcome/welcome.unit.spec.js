describe('welcomeWinemakerCtrl Controller', function () {
  'use strict';

  var welcomeWinemakerCtrl,
      Mixpanel,
      DomainResource,
      Domains,
      $scope;

  beforeEach(module('vinibar.winemaker.welcome'));
  beforeEach(module('vinibar.mockresources.domain'));

  beforeEach(inject(function ($rootScope, $controller, _$state_, DomainMockResource) {
    $scope = $rootScope.$new();
    $state = _$state_;

    DomainResource = DomainMockResource;
    Domains = jasmine.createSpyObj('Domains', [ 'setDomains' ]);
    Mixpanel = jasmine.createSpyObj('Mixpanel', [ 'alias', 'identify' ]);

    spyOn($state, 'go');

    welcomeWinemakerCtrl = $controller('welcomeWinemakerCtrl', {
      $scope: $scope,
      Mixpanel: Mixpanel,
      Domains: Domains,
      DomainResource: DomainResource,
      $state: $state
    });
  }));

  it('should have an welcomeWinemakerCtrl with a populated scope', function () {
    expect(welcomeWinemakerCtrl).toBeDefined();
    expect($scope).toBeDefined();
    expect($scope.query).toBeDefined();
  });

  it('should query the list, identify setDomains and go to domain_list', function () {
    spyOn(DomainResource, 'query').and.callFake(function (id, success, failure) {
      success([ 'Domain', 'domain' ]);
    });

    $scope.query('felix.lechevallier@gmail.com');
    expect(Mixpanel.identify).toHaveBeenCalledWith('felix.lechevallier@gmail.com');
    expect(Domains.setDomains).toHaveBeenCalledWith([ 'Domain', 'domain' ]);
    expect($state.go).toHaveBeenCalledWith('domain_list');
  });

  it('should query the list, alias and go to winemaker_form', function () {
    spyOn(DomainResource, 'query').and.callFake(function (id, success, failure) {
      success([]);
    });

    $scope.query('felix.lechevallier@gmail.com');
    expect(Mixpanel.alias).toHaveBeenCalledWith('felix.lechevallier@gmail.com');
    expect(Domains.setDomains).not.toHaveBeenCalled();
    expect($state.go).toHaveBeenCalledWith('winemaker_form');
  });

  it('should query the list, alias and go to winemaker_form', function () {
    spyOn(DomainResource, 'query').and.callFake(function (id, success, failure) {
      failure([]);
    });

    $scope.query('felix.lechevallier@gmail.com');
    expect(Mixpanel.alias).toHaveBeenCalledWith('felix.lechevallier@gmail.com');
    expect(Domains.setDomains).not.toHaveBeenCalled();
    expect($state.go).toHaveBeenCalledWith('winemaker_form');
  });



});