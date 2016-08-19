'use strict';

app.controller('RepoController', function($scope, $routeParams) {

    $scope.message = "repo.html";
    $scope.username = $routeParams.username;
    $scope.reponame = $routeParams.reponame;

});
