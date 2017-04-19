ngCordovaMocks.factory('$cordovaCalendar', ['$q', function ($q) {
  var throwsError = false;

  return {
    /**
     * @ngdoc property
     * @name throwsError
     * @propertyOf ngCordovaMocks.cordovaCalendar
     * @type Boolean
     *
     * @description
     * A flag that signals whether a promise should be rejected.
     * This property should only be used in automated tests
     */
    throwsError: throwsError,

    show: function () {
      var defer = $q.defer();

      if (this.throwsError) {
        defer.reject('There was an error on showing action sheet');
      } else {
        defer.resolve();
      }

      return defer.promise;
    },
    listEventsInRange: function () {
      var defer = $q.defer();

      if (this.throwsError) {
        defer.reject('There was an error on showing action sheet');
      } else {
        defer.resolve([]);
      }

      return defer.promise;
    }
  };
}]);
