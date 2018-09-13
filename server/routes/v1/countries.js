'use strict';

const countryCtrl = require('../../controllers/CountryCtrl');

module.exports = (app) => {
    app.get('/api/v1/countries', countryCtrl.get);
    app.post('/api/v1/countries', countryCtrl.post);
};