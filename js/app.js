(function (){

    var app = angular.module ('wgEditor', [ 'ui.bootstrap', 'ngCookies', 'ngRoute', 'ngMessages',
        'pascalprecht.translate', 'editorControllers'
    ]);

    app.lang = "en";
    app.rootUrl = "http://localhost";
    app.baseUrl = "http://localhost/wg_editor";
    app.pf3baseUrl="http://dis.printoutsource.com/ulsa/pf3";

    app.config (['$routeProvider',
    function ($routeProvider){
        $routeProvider.
           when('/login',{
                templateUrl: 'partials/login.html',
                controller: 'userController'
            }).
            when('/workgroup',{
                templateUrl: 'partials/colin/workgroup-editor-panel.html'
            }).
        otherwise({
                redirectTo: '/workgroup'
            });

    }])
    app.config(['$translateProvider',
        function ($translateProvider) {
            $translateProvider
                .translations('de', translations_de_DE)
                .translations('en', translations_en_GB)
                .fallbackLanguage('en');
            $translateProvider.preferredLanguage(app.lang);
        }]);

})();