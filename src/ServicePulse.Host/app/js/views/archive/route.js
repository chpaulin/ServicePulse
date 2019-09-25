(function (window, angular) {
    'use strict';

    function routeProvider($routeProvider) {
        $routeProvider.when('/archived', {
            redirectTo: '/failed-messages/archived'
        }).when('/failed-messages/archived', {
            templateUrl: 'js/views/archive/view.html',
            controller: 'archivedMessageController',
            controllerAs: 'vm'
        });
    }

    routeProvider.$inject = [
        '$routeProvider'
    ];

    angular.module('sc')
        .config(routeProvider);

}(window, window.angular));