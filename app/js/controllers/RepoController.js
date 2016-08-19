'use strict';

app.controller('RepoController', function($scope, $routeParams, github) {

    $scope.message = "Repository Details";
    $scope.reponame = $routeParams.reponame;

    var onError = function(reason) {
        $scope.error = "Could not fetch data";
    };

    var onRepoDetailsComplete = function(data) {
        $scope.repo = data;
        var promise = github.getSuscribers($scope.repo);
        promise.then(onSuscribersComplete, onError);
    };

    var onSuscribersComplete = function(data) {
        $scope.suscribers = data;
    };

    github.getRepoDetails($routeParams.username, $routeParams.reponame)
        .then(onRepoDetailsComplete, onError);
});
