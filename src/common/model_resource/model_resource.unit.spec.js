describe('ModelResource', function () {
  'use strict';

  var ModelResource,
      StubResource,
      fakeCallback,
      $rootScope,
      $q;

  beforeEach(module('vinibar.modelresource'));
  beforeEach(module('vinibar.mockresources'));

  beforeEach(inject(function (_$q_, _$rootScope_, _ModelResource_) {
    $q = _$q_;
    $rootScope = _$rootScope_;
    ModelResource = _ModelResource_;

    StubResource = new ModelResource('stub');
    fakeCallback = jasmine.createSpy('fakeCallback');
  }));


  describe('getOrThrow', function () {
    var resourceMatcher, data, success, fake;

    resourceMatcher = { id: '246' };
    data = {};
    success = function () {};

    it('should delegate to resource.get with all its arguments', function () {

      spyOn(StubResource, 'get').and.callFake(function () {
        return { $promise: { then: function () {} } };
      });

      StubResource.getOrThrow(resourceMatcher, data, success);
      expect(StubResource.get).toHaveBeenCalledWith(resourceMatcher, data, success);

      StubResource.get.calls.reset();

      StubResource.getOrThrow(resourceMatcher, success);
      expect(StubResource.get).toHaveBeenCalledWith(resourceMatcher, success);

      StubResource.get.calls.reset();

      StubResource.getOrThrow(resourceMatcher, data);
      expect(StubResource.get).toHaveBeenCalledWith(resourceMatcher, data);

      StubResource.get.calls.reset();

      StubResource.getOrThrow(resourceMatcher);
      expect(StubResource.get).toHaveBeenCalledWith(resourceMatcher);
    });

    it('should throw if resource.get promise is rejected', function () {

      spyOn(StubResource, 'get').and.callFake(function () {
        return {
          $promise: $q(function (resolve, reject) {
            reject('some reason');
          })
        };
      });

      // We must use an $apply inside the function to trigger the throw callback
      expect(function () {
        StubResource.getOrThrow(resourceMatcher, success);
        $rootScope.$apply();
      }).toThrowError('some reason');
    });
  });

  // describe('saveOrUpdate', function () {

  //   it('should save if the resource has no resource_uri field - success case', function (done) {

  //     var stub = new StubResource({ example: 'property' });

  //     spyOn(stub, '$update');
  //     spyOn(stub, '$save').and.callFake(function (success) {
  //       return $q(function (resolve, reject) {
  //         success('some response');
  //         resolve('some response');
  //       });
  //     });

  //     stub.saveOrUpdate(fakeCallback).then(function (response) {
  //       expect(stub.$save).toHaveBeenCalled();
  //       expect(stub.$update).not.toHaveBeenCalled();

  //       expect(response).toEqual('some response');
  //       expect(fakeCallback).toHaveBeenCalledWith('some response');
  //       done();
  //     });

  //     $rootScope.$apply();
  //   });

  //   it('should save if the resource has no resource_uri field - failure case', function (done) {

  //     var stub = new StubResource({ example: 'property' });

  //     spyOn(stub, '$update');
  //     spyOn(stub, '$save').and.callFake(function (success, failure) {
  //       return $q(function (resolve, reject) {
  //         failure('some error');
  //         reject('some error');
  //       });
  //     });

  //     stub.saveOrUpdate(null, fakeCallback).then(null, function (response) {
  //       expect(stub.$save).toHaveBeenCalled();
  //       expect(stub.$update).not.toHaveBeenCalled();

  //       expect(response).toEqual('some error');
  //       expect(fakeCallback).toHaveBeenCalledWith('some error');
  //       done();
  //     });

  //     $rootScope.$apply();
  //   });

  //   it('should update if the resource already has a resource_uri field -- success case', function (done) {

  //     var stub = new StubResource({ example: 'property', resource_uri: '/some/resource/uri' });

  //     spyOn(stub, '$save');
  //     spyOn(stub, '$update').and.callFake(function (success) {
  //       return $q(function (resolve, reject) {
  //         success('some response');
  //         resolve('some response');
  //       });
  //     });

  //     stub.saveOrUpdate(fakeCallback).then(function (response) {
  //       expect(stub.$save).not.toHaveBeenCalled();
  //       expect(stub.$update).toHaveBeenCalled();

  //       expect(response).toEqual('some response');
  //       expect(fakeCallback).toHaveBeenCalledWith('some response');
  //       done();
  //     });

  //     $rootScope.$apply();
  //   });

  //   it('should update if the resource already has a resource_uri field -- failure case', function (done) {

  //     var stub = new StubResource({ example: 'property', resource_uri: '/some/resource/uri' });

  //     spyOn(stub, '$save');
  //     spyOn(stub, '$update').and.callFake(function (success, failure) {
  //       return $q(function (resolve, reject) {
  //         failure('some error');
  //         reject('some error');
  //       });
  //     });

  //     stub.saveOrUpdate(null, fakeCallback).then(null, function (response) {
  //       expect(stub.$save).not.toHaveBeenCalled();
  //       expect(stub.$update).toHaveBeenCalled();

  //       expect(response).toEqual('some error');
  //       expect(fakeCallback).toHaveBeenCalledWith('some error');
  //       done();
  //     });

  //     $rootScope.$apply();
  //   });
  // });

  // describe('reload', function () {

  //   it('should fail if the resource has no resource_uri field', function () {

  //     var stub = new StubResource({ example: 'property' });

  //     stub.reload(null, fakeCallback).then(null, function (error) {
  //       expect(error).toEqual('Cannot reload: resource has no resource_uri');
  //       expect(fakeCallback).toHaveBeenCalledWith('Cannot reload: resource has no resource_uri');
  //     });

  //     $rootScope.$apply();
  //   });

  //   it('should delegate to get if the resource has a resource_uri field - success case', function () {

  //     var stub = new StubResource({ example: 'property', resource_uri: '/some/resource/uri' });

  //     spyOn(stub, '$get').and.callFake(function () {
  //       return $q(function (resolve, reject) {
  //         resolve('some response');
  //       });
  //     });

  //     stub.reload(fakeCallback).then(function (response) {
  //       expect(response).toEqual('some response');
  //       expect(fakeCallback).toHaveBeenCalledWith('some response');
  //     });

  //     $rootScope.$apply();
  //   });

  //   it('should delegate to get if the resource has a resource_uri field - failure case', function () {

  //     var stub = new StubResource({ example: 'property', resource_uri: '/some/resource/uri' });

  //     spyOn(stub, '$get').and.callFake(function () {
  //       return $q(function (resolve, reject) {
  //         reject('some error');
  //       });
  //     });

  //     stub.reload(null, fakeCallback).then(null, function (response) {
  //       expect(response).toEqual('some error');
  //       expect(fakeCallback).toHaveBeenCalledWith('some error');
  //     });

  //     $rootScope.$apply();
  //   });
  // });

});