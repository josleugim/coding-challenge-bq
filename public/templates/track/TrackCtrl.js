'use strict';
angular.module('myApp')
    .controller('TrackCtrl', ['$scope', 'TrackService', 'ArtistService', TrackCtrl]);

function TrackCtrl($scope, TrackService, ArtistService) {
    $scope.updateActive = false;
    getArtistList({});
    getTrackList({});

    $scope.loadTrack = function (track) {
        $scope.updateActive = true;
        TrackService.getById(track.id).then(function (data) {
            if(data.success) {
                $scope.track = data.track;
                angular.forEach($scope.artists, function (artist) {
                    if(artist.id === data.track.userid) {
                        $scope.selectedArtist = artist;
                    }
                })
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

        if(!$scope.trackForm.selectedArtist.$pristine) {
            data.artistName = $scope.selectedArtist.name;
            data.userid = $scope.selectedArtist.id;
        }

        TrackService.put(data.id, data).then(function (data) {
            if(data.success) {
                getTrackList({});
            }
            $scope.track = '';
            $scope.selectedArtist = '';
            $scope.updateActive = false;
        })
    };

    $scope.orderByModel = function (model) {
        $scope.currentOrder = model;
    };

    $scope.newTrack = function () {

    };

    function getTrackList(query) {
        TrackService.get(query).then(function (data) {
            if(data) {
                $scope.tracks = data;
            }
        });
    }

    function getArtistList(query) {
        ArtistService.get(query).then(function (data) {
            if(data.success) {
                $scope.artists = data.artists;
            }
        })
    }
}