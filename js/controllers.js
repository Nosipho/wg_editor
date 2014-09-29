'use strict';

var editorControllers = angular.module ('editorControllers', []);

editorControllers.controller('editorController', function($scope, pf3service, dataService) {
    $scope.dirtyWorkgroup = false;
    $scope.selectedWorkgroup = {};
    $scope.currentWorkgroup = {};
    $scope.dirtyClient = false;
    $scope.selectedClient = {};
    $scope.currentClient = {};
    $scope.dirtyUser = false;
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
            $scope.selectClient(_.values($scope.currentWorkgroup.clients)[0]);
        });
    }

    $scope.selectClient = function(client) {
        $scope.selectedClient = client;
        $scope.currentClient = client;
        $scope.selectUser(_.values($scope.currentClient.users)[0]);
    }

    $scope.selectUser = function(user) {
        $scope.selectedUser = user;
        $scope.currentUser = user;
    }

    $scope.userSetFullName = function() {
        $scope.currentUser.full_name = $scope.currentUser.first_name + " " + $scope.currentUser.last_name;
    }

    $scope.saveCurrentUser = function() {
        $scope.currentClient.users[$scope.currentUser.id] = $scope.currentUser;
    }

    $scope.saveCurrentClient = function() {
        $scope.currentWorkgroup.clients[$scope.currentClient.name] = $scope.currentClient;
    }

    $scope.saveCurrentWorkgroup = function() {
        // TODO save workgroup
    }

});






