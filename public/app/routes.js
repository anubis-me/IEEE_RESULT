var app=angular.module('memberRoute',['ngRoute'])

    .config(function($routeProvider, $locationProvider) {

        $routeProvider
        //directs to home page
            .when('/', {
                templateUrl  :'app/views/transition.html',
                controller  :'transition',
                controllerAs:'tran'
            })
            .when('/load', {
                templateUrl  :'app/views/loadm.html',
                controller  :'transition',
                controllerAs:'tran'
            })

            .when('/regsubmit', {
                templateUrl  :'app/views/regnum.html',
                controller  :'transition',
                controllerAs:'tran'
            })
            .when('/surprise', {
                templateUrl  :'app/views/surprise.html',
                controller  :'formda',
                controllerAs:'da'
            })

            .when('/selected', {
                templateUrl  :'app/views/selected.html',
                controller  :'transition',
                controllerAs:'tran'
            })
            .when('/nselected', {
                templateUrl  :'app/views/nselected.html'
            })

            .when('/nohack', {
                templateUrl  :'app/views/hacker.html'
            })

             .when('/loader', {
                templateUrl  :'app/views/LOADER.html'
            })


            .otherwise({ redirectTo: '/nohack' }); // If user tries to access any other route, redirect to home page

        $locationProvider.html5Mode({ enabled: true, requireBase: false }); // Required to remove AngularJS hash from URL
    });
