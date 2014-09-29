var app = angular.module('wgEditor');

app.directive('workgroupDetailsPanel', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/colin/workgroup-details-panel.html',
            transclude: true
        }
    }
)
