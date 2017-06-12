ngCordovaMocks.factory('$cordovaImagePicker', ['$q', function ($q) {
  var throwsError = false;

  return {
    /**
     * @ngdoc property
     * @name throwsError
     * @propertyOf ngCordovaMocks.imagePicker
     * @type Boolean
     *
     * @description
     * A flag that signals whether a promise should be rejected.
     * This property should only be used in automated tests
     */
    throwsError: throwsError,

    getPictures: function () {
      var defer = $q.defer();

      if (this.throwsError) {
        defer.reject('There was an error on showing action sheet');
      } else {
        defer.resolve(['file:///']);
      }

      return defer.promise;
    }
  };
}]);
