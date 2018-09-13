'use strict';

const express = require('express');

const app = express();
const config = require('./server/config/configuration');
require('./server/config/express')(app, config);
require('./server/routes/v1/tracks')(app);
require('./server/routes/v1/artists')(app);
require('./server/routes/v1/countries')(app);
require('./server/routes/v1/home')(app, config);

app.listen(config.development.port, function () {
    console.log('Gulp is running the API on PORT: ' + config.development.port);
});