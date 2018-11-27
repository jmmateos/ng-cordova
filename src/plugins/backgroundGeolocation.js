// install   :     cordova plugin add https://github.com/christocracy/cordova-plugin-background-geolocation.git
// link      :     https://github.com/christocracy/cordova-plugin-background-geolocation

angular.module('ngCordova.plugins.backgroundGeolocation', [])

  .factory('$cordovaBackgroundGeolocation', ['$q', '$window', function ($q, $window) {

    return {

      configure: function (options) {

        var q = $q.defer();

        $window.BackgroundGeolocation.configure(options,
          function (result) {
            q.notify(result);
          },
          function (err) {
            q.reject(err);
          });

        return q.promise;
      },

      setConfig: function (options) {

        var q = $q.defer();

        $window.BackgroundGeolocation.setConfig(options,
          function (result) {
            q.notify(result);
          },
          function (err) {
            q.reject(err);
          });

        return q.promise;
      },

      start: function () {
        var q = $q.defer();

        $window.BackgroundGeolocation.start(
          function (result) {
            q.resolve(result);
          },
          function (err) {
            q.reject(err);
          });

        return q.promise;
      },

      stop: function () {
        var q = $q.defer();

        $window.BackgroundGeolocation.stop(
          function (result) {
            q.resolve(result);
          },
          function (err) {
            q.reject(err);
          });

        return q.promise;
      },

      getCurrentPosition: function (options) {
        var q = $q.defer();
        $window.BackgroundGeolocation.getCurrentPosition(
          function (result) {
            q.resolve(result);
          },
          function (err) {
            q.reject(err);
          }, options);

        return q.promise;
                
      }
    };
  }

  ]);
