'use strict';

var app = angular.module('githubViewer', []);

app.controller("MainController", function($scope, $http) {

    $scope.message = "Hello, Angular!";
    $scope.username = "robconery";
    $scope.user = null;
    $scope.userRepos = null;

    var onError = function(reason) {
        $scope.error = "Could not fetch the user";
    };

    $scope.searchUser = function(username) {
        $http.get("https://api.github.com/users/" + username)
            .then(onUserComplete, onError);
    };

    $scope.resetSearch = function() {
        $scope.user = null;
        $scope.userRepos = null;
        $scope.error = null;
    };

    var onUserComplete = function(response) {
        $scope.user = response.data;
        var repos_url = $scope.user.repos_url;
        $http.get(repos_url).then(onUserReposComplete, onError);
    };

    var onUserReposComplete = function(response) {
        $scope.userRepos = response.data;
    }
});
