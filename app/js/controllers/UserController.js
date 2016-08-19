'use strict';

app.controller("UserController", function($scope, github, $routeParams) {

    $scope.user = null;
    $scope.userRepos = null;
    $scope.repoSortOrder = '-stargazers_count';
    $scope.username = $routeParams.username;

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

    var promise = github.getUser($scope.username);
    promise.then(onUserComplete, onError);

    $scope.resetSearch = function() {
        $scope.user = null;
        $scope.userRepos = null;
        $scope.error = null;
    };
});
