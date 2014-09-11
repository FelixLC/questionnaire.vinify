angular.module('stripe', [])
  .directive('stripeCheckout', function() {
    return {
      restrict: 'A',
      controller: ["$scope", "$http", "$location", function($scope, $http, $location) {
        $scope.handler = StripeCheckout.configure({
          key: "pk_test_sK21onMmCuKNuoY7pbml8z3Q",
          // key: "pk_live_gNv4cCe8tsZpettPUsdQj25F",
          image: "assets/LogoVinifyMini2.png",
          token: function(token, args) {
            var data_order = token;
            data_order.order_id = $scope.currentClient.order.id;
            data_order.delivery_cost = $scope.delivery_cost;
            data_order.delivery_mode = $scope.delivery_mode;

            var urlPOST = '/stripevinibar/';

            if ($scope.currentClient.order.order_type === "Refill")
              {urlPOST = '/striperefill/';}

            $http({
                              url: urlPOST,
                              method: "POST",
                              data: data_order
                      })
                      .success(function(data, status, headers, config) {
                        $location.path('/remerciement_order');
                        mixpanel.track('Sucessful payment');
                      })
                      .error(function(data, status, headers, config) {
                        alert('Il y a eu une erreur avec votre commande, merci de réessayer');
                        mixpanel.track('Server Failed to proceed payment');

                      });
          }
        });
      }],
      link: function(scope, element, attrs) {


        element.bind('click',function(e) {
          // Open Checkout with further options
          scope.handler.open({
            name: "Vinify",
            description: "Vinibar",
            currency: "EUR",
            panelLabel: "Payer",
            amount: scope.currentClient.order.final_price * 100,
            email: scope.currentClient.order.user.email
          });
          e.preventDefault();
        });
      }
    };
  });