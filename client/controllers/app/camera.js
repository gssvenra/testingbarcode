angular.module('app').controller('app_camera', app_camera);
function app_camera($scope, app) {
    'use strict';
    app.init($scope, function () {
    });
    $scope.sendAndCreate = function () {
        app.call('Camera.receiveAndCreate', { 'base64string': $scope.data.mydata });
    };
}