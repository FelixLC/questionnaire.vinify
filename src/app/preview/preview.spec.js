describe( 'previewCtrl', function() {
  describe( 'works as intended', function() {
    var previewCtrl, $location, $scope;

    beforeEach( module( 'vinibar.preview' ) );

    beforeEach( inject( function( $controller, _$state_, $rootScope ) {
      $state = _$state_;
      $scope = $rootScope.$new();
      spyOn($state, 'go').and.callThrough();
      previewCtrl = $controller( 'previewCtrl', { $state: $state, $scope: $scope });
    }));

    it( 'should pass a dummy test', inject( function() {
      expect( previewCtrl ).toBeTruthy();
    }));
  });
});