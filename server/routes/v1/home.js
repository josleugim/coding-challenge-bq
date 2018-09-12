'use strict';

module.exports = (app, config) => {
    app.get('*', (req, res) => {
        res.sendFile(config.development.rootPath + 'public/index.html');
    });
};