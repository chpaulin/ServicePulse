﻿; (function (window, angular, undefined) {
    'use strict';

    function controller(
        connectionsManager) {
        var vm = this;

        var initialServiceControlUrl = connectionsManager.getServiceControlUrl();
        var initialMonitoringUrl = connectionsManager.getMonitoringUrl();

        vm.loadingData = false;
        vm.configuredServiceControlUrl = initialServiceControlUrl;
        vm.configuredMonitoringUrl = initialMonitoringUrl;
        
        vm.testAndSave = function () {

            if (vm.configuredServiceControlUrl !== initialServiceControlUrl) {
                //changed -> needs validation
            }

            if (vm.configuredMonitoringUrl !== initialMonitoringUrl) {
                //changed -> needs validation
            }

            connectionsManager.updateConnections(vm.configuredServiceControlUrl, vm.configuredMonitoringUrl);
        };
    }

    controller.$inject = [
        'connectionsManager'
    ];

    angular.module('configuration.connections')
        .controller('connectionsController', controller);

})(window, window.angular);