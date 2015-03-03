describe('WinemakerFactory ', function () {
  'use strict';

  var WinemakerFactory,
          currentWinemaster,
          toaster,
          $q,
          $http,
          settings,
          Mixpanel,
          $httpBackend;

  beforeEach(module('vinibar.winemakers.factory'));
  beforeEach(module('vinibar.winemakers'));
  beforeEach(module('toaster'));
  beforeEach(module('settings'));
  beforeEach(module('Mixpanel'));

  beforeEach(inject(function (_toaster_, _$httpBackend_, _$q_, _$http_, _settings_, _Mixpanel_, _WinemakerFactory_, _currentWinemaster_) {
    toaster = _toaster_;
    $http = $http;
    $q = $q;
    settings = _settings_;
    WinemakerFactory = _WinemakerFactory_;
    currentWinemaster = _currentWinemaster_;
    $httpBackend = _$httpBackend_;
    Mixpanel = _Mixpanel_;
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('getOrCreate ', function () {
    it('should make a call to public/winemakers when used with uuid', function () {
      WinemakerFactory.getOrCreate('uuid');
      $httpBackend.expectGET(settings.apiEndPoint + '/restapi/public/winemakers/uuid/').respond(200, {});
      $httpBackend.flush();
    });

    it('should make a call to public/winemakers when used with uuid and generate a wine if error', function () {
      var result =  WinemakerFactory.getOrCreate('uuid');
      $httpBackend.expectGET(settings.apiEndPoint + '/restapi/public/winemakers/uuid/').respond(500, '');
      $httpBackend.flush();
      expect(result).toBeTruthy();
    });

    it('should not make a call to public/winemakers when used without uuid', function () {
      var result = WinemakerFactory.getOrCreate();
      expect(result).toBeTruthy();
    });
  });

  describe('saveOrUpdate ', function () {
    it('should make a call to svi/winemakers --success', function () {

      currentWinemaster.email = 'jmmormeck@gmail.com';
      var result =  WinemakerFactory.saveOrUpdate({ winemaker_name: 'jean-marc' });

      $httpBackend.expectPOST(settings.apiEndPoint + '/api/wines/svi/winemaker/', {
          email: 'jmmormeck@gmail.com',
          winemaker: { winemaker_name: 'jean-marc' }
        })
        .respond({ winemaker_name: 'jean-marc' }, 200);
      $httpBackend.flush();
      result.success(function (data) {
        expect(data).toEqual({ winemaker_name: 'jean-marc' });
      });
    });

    it('should make a call to svi/winemakers --failure', function () {
      spyOn(Mixpanel, 'track');
      currentWinemaster.email = 'jmmormeck@gmail.com';
      var result =  WinemakerFactory.saveOrUpdate({ winemaker_name: 'jean-marc' });

      $httpBackend.expectPOST(settings.apiEndPoint + '/api/wines/svi/winemaker/', {
          email: 'jmmormeck@gmail.com',
          winemaker: { winemaker_name: 'jean-marc' }
        })
        .respond(500);
      $httpBackend.flush();
      expect(Mixpanel.track).toHaveBeenCalled();
    });

  });

});