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
    $scope.workgroups = [];

    $scope.clipBoard = {
        workgroup: {},
        client: {},
        user: {},
    }

    pf3service.getWorkgroups().success(function (response) {
        $scope.workgroups = response;
    }).then(function (message) {
        $scope.selectWorkgroup($scope.workgroups[0]);
    });

    $scope.selectWorkgroup = function (workgroup) {
        $scope.selectedWorkgroup = workgroup;
        pf3service.getWorkgroupConfig($scope.selectedWorkgroup.id).success(function (response) {
            $scope.currentWorkgroup = response;
            $scope.selectClient(_.values($scope.currentWorkgroup.clients)[0]);
        });
    }

    $scope.selectClient = function (client) {
        $scope.selectedClient = client;
        $scope.currentClient = client;
        $scope.selectUser(_.values($scope.currentClient.users)[0]);
    }

    $scope.selectUser = function (user) {
        $scope.selectedUser = user;
        $scope.currentUser = user;
    }

    $scope.userSetFullName = function () {
        $scope.currentUser.full_name = $scope.currentUser.first_name + " " + $scope.currentUser.last_name;
    }

    $scope.saveCurrentUser = function () {
        $scope.currentClient.users[$scope.currentUser.id] = $scope.currentUser;
    }

    $scope.saveCurrentClient = function () {
        $scope.currentWorkgroup.clients[$scope.currentClient.name] = $scope.currentClient;
    }

    $scope.saveCurrentWorkgroup = function () {
        // TODO save workgroup
    }

    $scope.addUser = function () {
        $scope.currentUser = {
            first_name: "New",
            last_name: "User",
            full_name: "New User",
            id: "0000",
            email: "new.user@printoutsource.com",
            dropbox_folder: "New User"
        }
    }

    $scope.copyUser = function () {
        $scope.clipBoard.user = $scope.currentUser;
    }

    $scope.pasteUser = function () {
        $scope.currentUser = $scope.clipBoard.user;
    }

    $scope.deleteUser = function () {
        if ($scope.currentClient.users[$scope.currentUser.id]) {
            delete $scope.currentClient.users[$scope.currentUser.id];
            $scope.selectClient($scope.currentClient);
        }
    }

    $scope.addClient = function () {
        var client = $scope.dummyClient("New Client");
        $scope.selectClient(client);
    }

    $scope.selectDummyWorkgroup = function (briefWorkgroup, workgroup) {
        $scope.selectedWorkgroup = briefWorkgroup;
        $scope.currentWorkgroup = workgroup;
        $scope.selectClient(_.values($scope.currentWorkgroup.clients)[0]);
    }

    $scope.addWorkgroup = function () {
        var workgroup = $scope.dummyWorkgroup();
        var briefWorkgroup = {
            id: workgroup.id,
            name: workgroup.name
        }
        $scope.workgroups.push(workgroup);
        $scope.selectDummyWorkgroup(briefWorkgroup, workgroup);

    }

    $scope.dummyWorkgroup = function() {
        var client = $scope.dummyClient("New Workgroup");
        return {
            id: 0,
            name: "New Workgroup",
            os_group_name: "printflow",
            id_parent: 0,
            class_parent: "None",
            preflight_profile: "/opt/printflow2/callas/myprofiles/kishan_profile_10.kfpx",
            os_userid: 500,
            os_groupid: 500,
            os_user_name: "printflow",
            dam_site: "new-workgroup",
            class: "workgroup",
            dropbox_root: "/home/printflow/Dropbox/pf_new-workgroup",
            serial_number: "PF2001",
            clients: { "New Workgroup": client }
        }

    }

    $scope.dummyClient = function(name) {
        var user = $scope.dummyUser("1001");
        return {
            name: name,
            users: {
                "1001": user
            },
            client_emails: [],
            buyer_emails: [],
            dam_category_id: "",
            file_notify_emails: [
                "printflow@printoutsource.com",
            ],
            "noosh_nge_enabled": false,
            "agency_emails": [],
            "account_managers": [
                "1001"
            ],
            "account_manager_emails": [
            ],
            "project_notify_emails": [
            ]
        };
    }

    $scope.dummyUser = function(id) {
        return {
            first_name: "New",
            last_name: "User",
            full_name: "New User",
            id: id,
            email: "new.user@printoutsource.com",
            dropbox_folder: "New User"
        }
    }

});






