(function (window, angular, $) {
    'use strict';

    angular.module('sc', [
        'ngRoute',
        'ngAnimate',
        'ngSanitize',
        'ngClipboard',
        'ngStorage',
        'ngCookies',
        'toaster',
        'toastService',
        'ui.bootstrap',
        'infinite-scroll',
        'services',
        'ui.particular',
        'ui.particular.reindexingstatus',
        'directives.moment',
        'eventLogItems',
        'endpoints',
        'monitored_endpoints',
        'endpoint_details',
        'wrappers',
        'customChecks',
        'configuration',
        'dashboard',
        'ui.select',
        'prettyXml',
        'licenseNotifierService',
        'platformexpired',
        'configuration.license',
    ]);

    angular.module('sc')
        .run(['$rootScope', '$location', '$log', function ($rootScope, $location, $log) {
            $rootScope.$log = $log; 
        }]);

    angular.module('sc')
        .value('$jquery', $)
        .constant('version', window.defaultConfig.version)
        .constant('showPendingRetry', window.defaultConfig.showPendingRetry)
        .constant('scConfig', window.defaultConfig);

    angular.module('sc').config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);

}(window, window.angular, window.jQuery));