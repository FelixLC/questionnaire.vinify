/**
* Unit tests suite for 'vinibar.order' module.
*/
describe('orderCtrl', function () {

  var orderCtrl, $location, $scope, $rootScope, mockCurrentClient, Order, toaster;

  beforeEach(module('vinibar.order'));
  beforeEach(module('vinibar.mockmodelresources.orderclient'));

  beforeEach(inject(function ($controller, _$state_, $rootScope, MockOrder, MockToaster) {
    $state = _$state_;
    $scope = $rootScope.$new();

    mockCurrentClient = { currentClient: {} };
    Order = MockOrder;
    toaster = MockToaster;

    spyOn(toaster, 'pop');
    spyOn(Order, 'testCoupon').and.callThrough();

    orderCtrl = $controller('orderCtrl', {
      $state: $state,
      $scope: $scope,
      $rootScope: $rootScope,
      currentClient: mockCurrentClient,
      toaster: toaster,
      Order: Order,
      $location: $location
    });
  }));

  it('should pass a dummy test', inject(function () {
    expect(orderCtrl).toBeTruthy();
  }));

  it('init variables to be set', inject(function () {
    expect($scope.client).toBeTruthy();
    expect($scope.coupon).toBeTruthy();
    expect($scope.delivery).toBeTruthy();
    expect($scope.b).toBeTruthy();
    expect($scope.blur).toBeTruthy();
    expect($scope.addUserInfo).toBeTruthy();
  }));

  it('should call Order.testCoupon if there is a valid coupon for a Vinibar', inject(function () {
    $scope.coupon.coupon = 1;
    $scope.client.order_type = 'Vinibar';
    $scope.blur();
    expect(Order.testCoupon).toHaveBeenCalled();
    expect($scope.coupon.isValid).toBeTruthy();
    expect(toaster.pop).toHaveBeenCalledWith('success', 'Coupon validé !', 'Vous économisez 10€ !');
  }));

  it('should reject coupon if there is a Referral coupon for a Discovery', inject(function () {
    $scope.coupon.coupon = 1;
    $scope.client.order_type = 'Découverte';
    $scope.blur();
    expect(Order.testCoupon).toHaveBeenCalled();
    expect($scope.coupon.isValid).toBeTruthy();
    expect(toaster.pop).toHaveBeenCalledWith('info', 'Vous ne pouvez pas utiliser un code parrainnage', 'avec l\'offre découverte. Vous pouvez cependant acquérir un Vinibar à 59€ !');
    expect($scope.coupon.coupon).toBe("");
  }));

  it('should call Order.testCoupon if there is a false coupon', inject(function () {
    $scope.coupon.coupon = 2;
    $scope.blur();
    expect(Order.testCoupon).toHaveBeenCalled();
    expect($scope.coupon.isValid).not.toBeTruthy();
    expect(toaster.pop).toHaveBeenCalledWith('info', 'Oops, votre code d\'accès semble erroné !', ' Veuillez réessayer ou contacter charlotte@vinify.co');
  }));

  it('should have a wrong user adding flow', inject(function () {
    var form = { $invalid: true };
    $scope.client.addUserInfo = function (success, failure) {
      success();
    };
    $scope.addUserInfo(form);
    expect(toaster.pop).toHaveBeenCalledWith('info', 'Oops', 'un ou plusieurs champs sont incomplets ou erronés.');
  }));

  // it('should have a correct user adding flow', inject(function () {
  //   var form = { $invalid: false };
  //   $scope.client.userinfos = {};
  //   $scope.client.order_type = "";
  //   $scope.client.order_uuid = 1;
  //   $scope.coupon.coupon = "";
  //   $scope.client.addUserInfo = function (success, failure) {
  //     success();
  //   };
  //   $scope.addUserInfo(form);
  // }));

});