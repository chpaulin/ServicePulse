(function (window, angular) {
    'use strict';

    function routeProvider($routeProvider) {
        $routeProvider.when('/failedMessages', {
            redirectTo: '/failed-messages/all'
        }).when('/failedMessages/:groupId',
            {
                redirectTo: '/failed-messages/groups/:groupId'
            })
            .when('/failed-messages/groups/:parentGroupId/:parentGroupIndex/:groupId', {
                templateUrl: 'js/views/failed_messages/view.html',
                controller: 'failedMessagesController',
                controllerAs: 'vm'
            })
            .when('/failed-messages/groups/:groupId', {
                templateUrl: 'js/views/failed_messages/view.html',
                controller: 'failedMessagesController',
                controllerAs: 'vm'
            }).when('/failed-messages/all', {
                templateUrl: 'js/views/failed_messages/view.html',
                controller: 'failedMessagesController',
                controllerAs: 'vm'
            });
    }

    routeProvider.$inject = [
        '$routeProvider'
    ];

    angular.module('sc')
        .config(routeProvider);

}(window, window.angular));