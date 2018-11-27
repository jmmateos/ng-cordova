/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaToast
 *
 * @description
 * A service for testing toasts
 * in an app build with ngCordova.
 *
 * @example
 */
ngCordovaMocks.factory('$cordovaToast', ['$q', 'toastr', '$timeout',
  function ($q, toastr,$timeout) {
  var throwsError = false,
    shortTime = 2000, longTime = 4000;

  return {
    /**
     * @ngdoc property
     * @name throwsError
     * @propertyOf ngCordovaMocks.cordovaToast
     *
     * @description
     * A flag that signals whether a promise should be rejected or not.
     * This property should only be used in automated tests.
     **/
    throwsError: throwsError,

    showShortTop: function (message) {
      var defer = $q.defer();
       toastr.success(message,{timeOut:shortTime, positionClass:'toast-top-center' });
      if (this.throwsError) {
        $timeout(function () { defer.reject('There was an error showing the toast.'); }, shortTime);
        
      } else {
        $timeout(function () { defer.resolve(); }, shortTime);
      }
      return defer.promise;
    },
    showShortCenter: function (message) {
      var defer = $q.defer();
      toastr.success(message,{timeOut:shortTime, positionClass:'toast-top-center' });
      if (this.throwsError) {
        $timeout(function () { defer.reject('There was an error showing the toast.'); }, shortTime);
      } else {
        $timeout(function () { defer.resolve(); }, shortTime);
      }
      return defer.promise;
    },
    showShortBottom: function (message) {
      var defer = $q.defer();
      toastr.success(message,{timeOut:shortTime, positionClass:'toast-bottom-center' });
      if (this.throwsError) {
        $timeout(function () { defer.reject('There was an error showing the toast.'); }, shortTime);
      } else {
        $timeout(function () { defer.resolve(); }, shortTime);
      }
      return defer.promise;
    },
    showLongTop: function (message) {
      var defer = $q.defer();
      toastr.success(message,{timeOut:longTime, positionClass:'toast-top-center' });
      if (this.throwsError) {
        $timeout(function () { defer.reject('There was an error showing the toast.'); }, longTime);
      } else {
        $timeout(function () { defer.resolve(); }, longTime);
      }
      return defer.promise;
    },
    showLongCenter: function (message) {
      var defer = $q.defer();
      toastr.success(message,{timeOut:longTime, positionClass:'toast-top-center' });
      if (this.throwsError) {
        $timeout(function () { defer.reject('There was an error showing the toast.'); }, longTime);
      } else {
        $timeout(function () { defer.resolve(); }, longTime);
      }
      return defer.promise;
    },
    showLongBottom: function (message) {
      var defer = $q.defer();
      toastr.success(message,{timeOut:longTime, positionClass:'toast-bottom-center' });
      if (this.throwsError) {
        $timeout(function () { defer.reject('There was an error showing the toast.'); }, longTime);
      } else {
        $timeout(function () { defer.resolve(); }, longTime);
      }
      return defer.promise;
    },
    showWithOptions: function (options) {
      var defer = $q.defer();
      toastr.success(options);
      if (this.throwsError) {
        defer.reject('There was an error showing the toast.');
      } else {
        defer.resolve();
      }
      return defer.promise;
    },
    show: function (message, duration, position) {
      var defer = $q.defer();
      toastr.success(message,{timeOut:duration, positionClass:position });
      if (this.throwsError) {
         $timeout(function () { defer.reject('There was an error showing the toast.'); }, duration);
      } else {
        $timeout(function () { defer.resolve(); }, duration);
      }
      return defer.promise;
    },
    hide: function () {
      var defer = $q.defer();
      toastr.clear();
      if (this.throwsError) {
        defer.reject('There was an error hiding the toast.');
      } else {
        defer.resolve();
      }
      return defer.promise;
    }
  };
}]);
