'use strict';
var myApp = angular.module('myApp', ['ngResource', 'ui.router']);

myApp.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', configuration]);

function configuration($locationProvider, $stateProvider, $urlRouterProvider, IdleProvider, KeepaliveProvider, AnalyticsProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/templates/home/index.html',
            controller: 'HomeCtrl',
        })
        .state('track', {
            url: '/track',
            templateUrl: '/templates/track/index.html',
            controller: 'TrackCtrl',
        });
}