'use strict';
angular.module('myApp')
    .controller('TrackCtrl', ['$scope', 'TrackService', TrackCtrl]);

function TrackCtrl($scope, TrackService) {
    TrackService.get().then(function (data) {
        if(data) {
            $scope.tracks = data;
        }
    });

    $scope.loadTrack = function (track) {
        TrackService.getById(track.id).then(function (data) {
            if(data.success) {
                $scope.track = data.track;
            }
        })
    };

    $scope.updateTrack = function () {
        var data = {
            id: $scope.track.id
        };

        if(!$scope.trackForm.title.$pristine) {
            data.title = $scope.track.title;
        }

        TrackService.put(data.id, data).then(function (data) {
            if(data.success) {
                $scope.track = '';
            }
        })
    }
}