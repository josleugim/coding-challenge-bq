'use strict';
angular.module('myApp')
    .factory('CountryService', ['$q', '$http', '$location', CountryService]);

function CountryService($q, $http, $location) {
    var host = 'http://' + $location.host() + ':4000/';

    return {
        get: get,
        post: post
    };

    function get(query) {
        var dfd = $q.defer();

        $http({
            method: 'GET',
            url: host + 'api/v1/countries',
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

    function post(data) {
        var dfd = $q.defer();

        $http({
            method: 'POST',
            url: host + 'api/v1/countries',
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