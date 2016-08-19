'use strict';

app.controller("MainController", function($scope, $location) {

    $scope.username = "angular";

    $scope.searchUser = function(username) {
        $location.path("/user/" + username);
    };

    $scope.resetSearch = function() {
        $scope.user = null;
        $scope.userRepos = null;
        $scope.error = null;
    };
});
