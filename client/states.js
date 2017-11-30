angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.barcode', {
        views: {
            app: {
                controller: 'app_barcode',
                templateProvider: function (app) {
                    return app.templateProvider('app.barcode');
                }
            }
        }
    }).state('app.howto', {
        views: {
            app: {
                controller: 'app_howto',
                templateProvider: function (app) {
                    return app.templateProvider('app.howto');
                }
            }
        }
    });
});