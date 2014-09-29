'use strict';

var editorControllers = angular.module ('editorControllers', []);

editorControllers.controller('editorController', function($scope, pf3service, dataService) {
    $scope.selectedWorkgroup = {};
    $scope.currentWorkgroup = {};
    $scope.selectedClient = {};
    $scope.currentClient = {};
    $scope.selectedUser = {};
    $scope.currentUser = {};

    pf3service.getWorkgroups().success(function (response) {
        $scope.workgroups =  response;
    }).then(function (message) {
        $scope.selectWorkgroup($scope.workgroups[0]);
    });

    $scope.selectWorkgroup = function(workgroup) {
        $scope.selectedWorkgroup = workgroup;
        pf3service.getWorkgroupConfig($scope.selectedWorkgroup.id).success(function (response) {
            $scope.currentWorkgroup = response;
        });
    }

    $scope.selectClient = function(client) {
        $scope.selectedClient = client;
    }

    $scope.selectUser = function(user) {
        $scope.selectedUser = user;
    }

});






