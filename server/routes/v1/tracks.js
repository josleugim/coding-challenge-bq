'use strict';

const trackCtrl = require('../../controllers/TrackCtrl');

module.exports = (app) => {
    app.get('/api/v1/tracks', trackCtrl.get);
    app.get('/api/v1/tracks/:id', trackCtrl.getById);
    app.put('/api/v1/tracks/:id', trackCtrl.put);
};