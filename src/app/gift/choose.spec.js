
  describe( 'giftChooseCtrl', function() {
    var giftChooseCtrl, $location, $scope;

    beforeEach( module( 'vinibar.gift.choose' ) );

    beforeEach( inject( function( $controller, $rootScope ) {
      $scope = $rootScope.$new();
      giftChooseCtrl = $controller( 'giftChooseCtrl', { $scope: $scope });
    }));

    it( 'should pass a dummy test', inject( function() {
      expect( giftChooseCtrl ).toBeTruthy();
    }));

  });
