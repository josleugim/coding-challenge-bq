'use strict';
angular.module('myApp')
    .factory('ArtistService', ['$q', '$http', '$location', ArtistService]);

function ArtistService($q, $http, $location) {
    var host = 'http://' + $location.host() + ':4000/';

    return {
        get: get
    };

    function get(query) {
        var dfd = $q.defer();

        $http({
            method: 'GET',
            url: host + 'api/v1/artists',
            params: query,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function successCallback(response) {
            if(response.data) {
                dfd.resolve(response.data);
            }
        }, function errorCallback(response) {
            dfd.resolve(response.data);
        });

        return dfd.promise;
    }
}