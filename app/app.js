'use strict';

var app = angular.module('githubViewer', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when("/main", {
        templateUrl: 'templates/main.html',
        controller: 'MainController'
    });
    $routeProvider.when("/user/:username", {
        templateUrl: 'templates/user.html',
        controller: 'UserController'
    });
    $routeProvider.when("/repo/:username/:reponame", {
        templateUrl: 'templates/repo.html',
        controller: 'RepoController'
    });
    $routeProvider.otherwise({redirectTo:"/main"});
});
