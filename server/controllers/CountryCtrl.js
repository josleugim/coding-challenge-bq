'use strict';
const db = require('../config/mysql');

exports.get = (req, res) => {
    const resData = {
        success: true
    };

    db.query("select * from country", (err, rows) => {
        if(err) {
            console.error(err);
        }
        if(rows.length > 0) {
            resData.countries = rows;
            res.status(200).json(resData);
        } else {
            resData.success = false;
            resData.message = 'No countries found';
            res.status(404).json(resData);
        }
    });
};

exports.post = (req, res) => {
    const resData = {
        success: true
    };

    if(req.body.name && req.body.code) {
        db.query("INSERT INTO country (name, code) values ('" + req.body.name + "', '" + req.body.code + "')", (err, result) => {
            if(err) {
                console.error(err);
            }
            if(typeof result !== 'undefined' && result.affectedRows === 1) {
                res.status(200).json(resData);
            } else {
                resData.success = false;
                resData.message = 'Could not create the country';
                res.status(500).json(resData);
            }
        });
    } else {
        resData.success = false;
        resData.message = 'Could not create the country';
        res.status(500).json(resData);
    }
};