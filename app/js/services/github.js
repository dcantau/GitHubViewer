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
        getRepoDetails: function(username, reponame) {
            var repo_url = "https://api.github.com/repos/" + username + "/" + reponame;
            return $http.get(repo_url).then(function(response) {
                return response.data;
            });
        },
        getSuscribers: function(repo) {
            var subscribers_url = repo.subscribers_url;
            return $http.get(subscribers_url).then(function(response) {
                return response.data;
            });
        }
    };
});
