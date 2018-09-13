'use strict';
angular.module('myApp')
    .controller('HomeCtrl', ['$scope', HomeCtrl]);

function HomeCtrl($scope) {
    $scope.items = [];
    for(var i=1; i <= 100; i++) {
        var log = i;
        while (!(i % 3)) {
            log = 'Multi';
            break;
        }

        while (!(i % 5)) {
            log = 'IT';
            break;
        }

        while (!(i % 3) && !(i % 5)) {
            log = 'Multipli';
            break;
        }

        $scope.items.push(log);
    }
}