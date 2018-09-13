'use strict';
const db = require('../config/mysql');

exports.get = (req, res) => {
    const resData = {
        success: true
    };

    db.query("select * from users", (err, rows) => {
        if(err) {
            console.error(err);
        }
        if(rows.length > 0) {
            resData.artists = rows;
            res.status(200).json(resData);
        } else {
            resData.success = false;
            resData.message = 'No artist found';
        }
    });
};