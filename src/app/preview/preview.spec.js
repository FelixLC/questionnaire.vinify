describe( 'previewCtrl', function() {
  describe( 'works as intended', function() {
    var previewCtrl, $location, $scope, currentClient;

    beforeEach( module( 'vinibar.preview' ) );

    beforeEach( inject( function( $controller, _$state_, $rootScope ) {
      $state = _$state_;
      $scope = $rootScope.$new();
      currentClient = { "currentClient": {} };
      spyOn($state, 'go');
      previewCtrl = $controller( 'previewCtrl', { $state: $state, $scope: $scope, currentClient: currentClient });
    }));

    it( 'should pass a dummy test', inject( function() {
      expect( previewCtrl ).toBeTruthy();
    }));

    it( 'should have a scope method', inject( function() {
      expect( $scope.order ).toBeDefined();
      $scope.order('Vinibar');
      expect(currentClient.currentClient.order_type).toBe('Vinibar');
      expect($state.go).toHaveBeenCalled();
    }));
  });
});