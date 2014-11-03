
angular.module('Resources', [])
  .constant('API_ENDPOINT','http://127.0.0.1:8000/api')

  //  The Client Factory is used to instantiate a new client
  .factory('Recommender', ['$http', 'API_ENDPOINT',  function ($http, API_ENDPOINT, $q) {
    var _preview = null;
    return {
      calcPreview: function(user) {
         return $http.post(API_ENDPOINT + '/backoffice/recommender/preview3/', {'user_uuid': user.uuid})
          .success(function(data, status, headers, config) {
            _preview = data;
          });
      },
      getPreview: function() {
        return _preview;
      }
    };
  }]);