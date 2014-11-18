/**
* Unit tests suite for 'vinibar.pay_mobile' module.
*/
describe( 'pay_mobileCtrl', function() {

    var pay_mobileCtrl, $location, $scope, mockCurrentClient, Order, toaster, Str;

    beforeEach( module( 'vinibar.pay_mobile' ) );
    beforeEach( module( 'vinibar.mockmodelresource' ) );

    beforeEach( inject( function( $controller, _$state_, $rootScope, MockOrder, MockToaster ) {
      $state = _$state_;
      $scope = $rootScope.$new();

      mockCurrentClient = { "currentClient": { "order" : {} } };
      Order = MockOrder;
      toaster = MockToaster;

      spyOn(toaster, 'pop');
      spyOn(Order, 'testCoupon').and.callThrough();

      pay_mobileCtrl = $controller( 'pay_mobileCtrl', {
        $state: $state,
        $scope: $scope,
        $rootScope: $rootScope,
        currentClient: mockCurrentClient,
        toaster: toaster,
        Order: Order,
        $location: $location
      });
    }));

    // it( 'should pass a dummy test', inject( function() {
    //   expect( pay_mobileCtrl ).toBeTruthy();
    // }));

});