'use strict';
angular.module('myApp')
    .factory('TrackService', ['$q', '$http', '$location', TrackService]);

function TrackService($q, $http, $location) {
    var host = 'http://' + $location.host() + ':4000/';

    return {
        //post: post,
        get: get,
        getById: getById,
        put: put,
        //del: deleteTrack,
    };

    function get(query) {
        var dfd = $q.defer();

        $http({
            method: 'GET',
            url: host + 'api/v1/tracks',
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

    function getById(id) {
        var dfd = $q.defer();

        $http({
            method: 'GET',
            url: host + 'api/v1/tracks/' + id,
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

    function put(id, data) {
        var dfd = $q.defer();

        $http({
            method: 'PUT',
            url: host + 'api/v1/tracks/' + id,
            data: data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function successCallback(response) {
            if(response.data.success) {
                dfd.resolve(response.data);
            }
        }, function errorCallback(response) {
            dfd.resolve(response.data);
        });

        return dfd.promise;
    }
}