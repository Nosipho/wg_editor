'use strict';

var app = angular.module('wgEditor');

app.factory('pf3service', function ($http) {

    var pf3API  = {};

    {}

    pf3API.getWorkgroupConfig = function (workgroupId) {
       var url = app.pf3baseUrl + '/workgroup?callback=JSON_CALLBACK&id=' + workgroupId
        return $http({
           method: 'JSONP',
           url: app.pf3baseUrl  +  '/workgroup?callback=JSON_CALLBACK&id=' + workgroupId
        });
   };


    pf3API.getWorkgroups = function() {
        var url = app.pf3baseUrl + '/workgroups?callback=JSON_CALLBACK&brief=true'
        return $http({
            method: 'JSONP',
            url: app.pf3baseUrl  +  '/workgroups?callback=JSON_CALLBACK&brief=true'
        });
    };

   return pf3API;

});



app.factory('dataService', function ($rootScope) {

    var shared = {};
    shared.selectWorkgroup = function (data) {
        $rootScope.$broadcast("workgroupSelected", data);
    }

   shared.selectClient = function (data) {
     $rootScope.$broadcast("clientSelected", data);
    }

   shared.selectUser = function (data) {
        $rootScope.$broadcast("userSelected", data);
    }

   return shared;
});

