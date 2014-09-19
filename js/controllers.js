'use strict';

var editorControllers = angular.module ('editorControllers', []);

editorControllers.controller('workgroupController', function($scope, pf3service, dataService ){
    pf3service.getWorkgroups().success(function (response) {
        $scope.workgroups =  response;
    }).then(function (message) {
       // $scope.currentWorkgroup = $scope.workgroups[0];

    });

    $scope.selectWorkgroup= function(wg){

        dataService.selectWorkgroup(wg);
    }

});

editorControllers.controller('wgEditorController', function($scope, pf3service, dataService ){
    $scope.currentWorkgroup = {};


    $scope.$on("workgroupSelected", function (event, args) {
        $scope.currentWorkgroup = pf3service.getWorkgroupConfig(args.id);


     });

});


//editorControllers.controller('wgClientController', function($scope, pf3service , dataService){

   // $scope.currentWorkgroup.currentClient = {};
//

   // $scope.$on("clientSelected", function (event, args) {
     //   $scope.currentWorkgroup.currentClient = pf3service.getWorkgroupConfig(args.id);

    //});


//});


editorControllers.controller('wgUserController', function($scope, pf3service ){


});


editorControllers.controller('userController', function($scope, pf3service){


});




