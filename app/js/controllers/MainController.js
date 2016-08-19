'use strict';

app.controller("MainController", function($scope, github) {

    $scope.message = github.sayHello("Angular");
    $scope.username = "angular";
    $scope.user = null;
    $scope.userRepos = null;
    $scope.repoSortOrder = '-stargazers_count';

    var onError = function(reason) {
        $scope.error = "Could not fetch data";
    };

    var onUserComplete = function(data) {
        $scope.user = data;
        var promise = github.getUserRepos($scope.user);
        promise.then(onUserReposComplete, onError);
    };

    var onUserReposComplete = function(data) {
        $scope.userRepos = data;
    };

    $scope.searchUser = function(username) {
        var promise = github.getUser(username);
        promise.then(onUserComplete, onError);
    };

    $scope.resetSearch = function() {
        $scope.user = null;
        $scope.userRepos = null;
        $scope.error = null;
    };
});