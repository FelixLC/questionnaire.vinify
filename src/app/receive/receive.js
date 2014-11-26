(function() {
  'use strict';

  angular.module('vinibar.receive', [
    'ui.router',
    'ui.bootstrap',
    'Mixpanel',
    'settings'
  ])
  .controller('ReceiveCtrl', ReceiveCtrl)
  .config(function config ($stateProvider) {

  });

  function ReceiveCtrl ($stateParams, settings, Mixpanel, $rootScope, $scope, $state) {

  }
  // /* @ngInject */
  // function Ctrl(dependencies) {
  //     /*jshint validthis: true */
  //     var vm = this;
  //     vm.title = 'Ctrl';

  //     activate();

  //     function activate() {
  //     }
  // }
})();
// (function() {
//     'use strict';

//     angular
//         .module('module')
//         .controller('Ctrl', Ctrl);

//     /* @ngInject */
//     function Ctrl(dependencies) {
//         /*jshint validthis: true */
//         var vm = this;
//         vm.title = 'Ctrl';

//         activate();

//         function activate() {
//         }
//     }
// })();