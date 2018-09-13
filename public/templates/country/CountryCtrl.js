'use strict';
angular.module('myApp')
    .controller('CountryCtrl', ['$scope', 'CountryService', CountryCtrl]);

function CountryCtrl($scope, CountryService) {
    getCountryList({});

    $scope.newCountry = function () {
        var data = {};

        if(!$scope.countryForm.name.$pristine) {
            data.name = $scope.country.name;
        }
        if(!$scope.countryForm.code.$pristine) {
            data.code = $scope.country.code;
        }

        CountryService.post(data).then(function (data) {
            if(data.success) {
                getCountryList({});
            }
        })
    };

    function getCountryList(query) {
        CountryService.get(query).then(function (data) {
            if(data.success) {
                $scope.countries = data.countries;
            }
        });
    }
}