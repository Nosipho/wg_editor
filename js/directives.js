var app = angular.module('wgEditor');

app.directive('workgroupDetailsPanel', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/colin/workgroup-details-panel.html',
            transclude: true
        }
    }
);

app.directive('clientDetailsPanel', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/colin/client-details-panel.html',
            transclude: true
        }
    }
);

app.directive('userDetailsPanel', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/colin/user-details-panel.html',
            transclude: true
        }
    }
);
