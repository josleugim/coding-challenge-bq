'use strict';

const artistCtrl = require('../../controllers/ArtistCtrl');

module.exports = (app) => {
    app.get('/api/v1/artists', artistCtrl.get);
};