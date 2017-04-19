/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaPrinter
 *
 * @description
 * A service for testing printer features
 * in an app build with ngCordova.
 **/
 ngCordovaMocks.factory('$cordovaPrinter', ['$q', '$window', function ($q, $window) {

  var throwsError = false;

    return {

      throwsError: throwsError,

      isAvailable: function () {
        var defer = $q.defer();
        if (this.throwsError) {
          defer.reject('There was an error printing.');
        } else {
          defer.resolve(true);
        }

        return defer.promise;
      },        


      print: function (doc, options) {
        var defer = $q.defer();
        if (this.throwsError) {
          defer.reject('There was an error printing.');
        } else {
          defer.resolve();
        }

        return defer.promise;    
            
      }
    };
  }]);
