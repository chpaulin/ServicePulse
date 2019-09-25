(function (window, angular) {
    'use strict';

    function routeProvider($routeProvider) {
        const template = require('./../views/configuration.html');

        $routeProvider.when('/configuration', {
                redirectTo: "/configuration/license"
            }).when('/configuration/endpoints', {
                data: {
                    redirectWhenNotConnected: '/configuration/connections'
                },
                template: template,
                controller: 'ConfigurationCtrl',
                controllerAs: 'vm'
            });
    }

    routeProvider.$inject = [
        '$routeProvider'
    ];

    angular.module('configuration.route', [])
        .config(routeProvider);

} (window, window.angular));