/**
* Unit tests suite for 'vinibar.order' module.
*/
describe( 'orderCtrl', function() {

    var orderCtrl, $location, $scope, mockCurrentClient, Order, toaster;

    beforeEach( module( 'vinibar.order' ) );
    beforeEach( module( 'vinibar.mockmodelresource' ) );

    beforeEach( inject( function( $controller, _$state_, $rootScope, MockOrder, MockToaster ) {
      $state = _$state_;
      $scope = $rootScope.$new();

      mockCurrentClient = { "currentClient": {} };
      Order = MockOrder;
      toaster = MockToaster;

      spyOn(toaster, 'pop');
      spyOn(Order, 'testCoupon').and.callThrough();

      orderCtrl = $controller( 'orderCtrl', {
        $state: $state,
        $scope: $scope,
        $rootScope: $rootScope,
        currentClient: mockCurrentClient,
        toaster: toaster,
        Order: Order,
        $location: $location
      });
    }));

    it( 'should pass a dummy test', inject( function() {
      expect( orderCtrl ).toBeTruthy();
    }));

    it( 'init variables to be set', inject( function() {
      expect( $scope.client ).toBeTruthy();
      expect( $scope.coupon ).toBeTruthy();
      expect( $scope.delivery ).toBeTruthy();
      expect( $scope.b ).toBeTruthy();
      expect( $scope.blur ).toBeTruthy();
      expect( $scope.addUserInfo ).toBeTruthy();
    }));

    it( 'should call Order.testCoupon if there is a valid coupon', inject( function() {
      $scope.coupon.coupon = 1;
      $scope.blur();
      expect(Order.testCoupon).toHaveBeenCalled();
      expect($scope.coupon.isValid).toBeTruthy();
      expect(toaster.pop).toHaveBeenCalledWith('success', 'Coupon validé !', 'Vous économisez 10€ !');
    }));

    it( 'should call Order.testCoupon if there is a false coupon', inject( function() {
      $scope.coupon.coupon = 2;
      $scope.blur();
      expect(Order.testCoupon).toHaveBeenCalled();
      expect($scope.coupon.isValid).not.toBeTruthy();
      expect(toaster.pop).toHaveBeenCalledWith('info', 'Oops, votre code d\'accès semble erroné !', ' Veuillez réessayer ou contacter charlotte@vinify.co');
    }));

});