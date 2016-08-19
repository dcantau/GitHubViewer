'use strict';

app.factory('github', function($http) {
    return {
        getUser: function(username) {
            return $http.get("https://api.github.com/users/" + username)
                .then(function(response) {
                    return response.data;
                });
        },
        getUserRepos: function(user) {
            return $http.get(user.repos_url).then(function(response) {
                return response.data;
            });
        },
        sayHello: function(name) {
            return "Hello," + name + "!";
        }
    };
});
