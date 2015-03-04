describe('WineFactory ', function () {
  'use strict';

  var WineFactory,
          currentWinemaster,
          toaster,
          $q,
          $http,
          settings,
          Mixpanel,
          $httpBackend;

  beforeEach(module('vinibar.wines.factory'));
  beforeEach(module('vinibar.winemakers'));
  beforeEach(module('toaster'));
  beforeEach(module('settings'));
  beforeEach(module('Mixpanel'));

  beforeEach(inject(function (_toaster_, _$httpBackend_, _$q_, _$http_, _settings_, _Mixpanel_, _WineFactory_, _currentWinemaster_) {
    toaster = _toaster_;
    $http = $http;
    $q = $q;
    settings = _settings_;
    WineFactory = _WineFactory_;
    currentWinemaster = _currentWinemaster_;
    $httpBackend = _$httpBackend_;
    Mixpanel = _Mixpanel_;
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('getOrCreate ', function () {
    it('should make a call to svi/wines when used with uuid', function () {
      WineFactory.winemaker = '123';
      WineFactory.getOrCreate('uuid');
      $httpBackend.expectGET(settings.restApiEndPoint + '/svi/wines/uuid/').respond(200, {});
      $httpBackend.flush();
    });

    it('should make a call to svi/wines when used with uuid and generate a wine if error', function () {
      WineFactory.winemaker = '123';
      var result =  WineFactory.getOrCreate('uuid');
      $httpBackend.expectGET(settings.restApiEndPoint + '/svi/wines/uuid/').respond(500, '');
      $httpBackend.flush();
      result.success(function (data) {
        expect(data).toEqual({ winemaker: '123' });
      });
    });

    it('should not make a call to svi/wines when used without uuid', function () {
      WineFactory.winemaker = '123';
      var result = WineFactory.getOrCreate();
      expect(result).toBeTruthy();
    });
  });

  describe('saveOrUpdate ', function () {
    it('should make a call to svi/wines --success', function () {

      currentWinemaster.email = 'jmmormeck@gmail.com';
      var result =  WineFactory.saveOrUpdate({ wine_name: 'jean-marc',
                        svi_profile: {
                            body: '',
                           nature: '',
                           texture: '',
                            body_light: false,
                            body_medium: false,
                            body_strong: false,
                            texture_light: false,
                            texture_medium: false,
                            texture_strong: false,
                            nature_light: false,
                            nature_medium: false,
                            nature_strong: false
                          }
                        });

      $httpBackend.expectPOST(settings.apiEndPoint + '/wines/svi/wine/', {
          email: 'jmmormeck@gmail.com',
          wine: { wine_name: 'jean-marc',
                        svi_profile: {
                            body: '',
                           nature: '',
                           texture: '',
                            body_light: false,
                            body_medium: false,
                            body_strong: false,
                            texture_light: false,
                            texture_medium: false,
                            texture_strong: false,
                            nature_light: false,
                            nature_medium: false,
                            nature_strong: false
                          }
                        }
        })
        .respond({ wine_name: 'jean-marc' }, 200);
      $httpBackend.flush();
      result.success(function (data) {
        expect(data).toEqual({ wine_name: 'jean-marc' });
      });
    });

    it('should make a call to svi/wines --failure', function () {
      spyOn(Mixpanel, 'track');
      currentWinemaster.email = 'jmmormeck@gmail.com';
      var result =  WineFactory.saveOrUpdate({ wine_name: 'jean-marc',
                        svi_profile: {
                            body: '',
                           nature: '',
                           texture: '',
                            body_light: false,
                            body_medium: false,
                            body_strong: false,
                            texture_light: false,
                            texture_medium: false,
                            texture_strong: false,
                            nature_light: false,
                            nature_medium: false,
                            nature_strong: false
                          }
                        });

      $httpBackend.expectPOST(settings.apiEndPoint + '/wines/svi/wine/', {
          email: 'jmmormeck@gmail.com',
          wine: { wine_name: 'jean-marc',
                        svi_profile: {
                            body: '',
                           nature: '',
                           texture: '',
                            body_light: false,
                            body_medium: false,
                            body_strong: false,
                            texture_light: false,
                            texture_medium: false,
                            texture_strong: false,
                            nature_light: false,
                            nature_medium: false,
                            nature_strong: false
                          }
                        }
        })
        .respond(500);
      $httpBackend.flush();
      expect(Mixpanel.track).toHaveBeenCalled();
    });

  });

});