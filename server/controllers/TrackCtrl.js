'use strict';
const db = require('../config/mysql');

exports.get = (req, res) => {
    db.query("select * from tracks", (err, rows) => {
        if(err) {
            console.error(err);
        } else {
            res.status(200).json(rows);
        }
    });
};

exports.getById = (req, res) => {
    let query = " ";
    const resData = {
        success: true
    };

    if(req.params.id && Number(req.params.id)) {
        query = "select * from tracks where id = " + req.params.id;
        db.query(query, (err, row) => {
            if(err) {
                console.error(err);
            }
            if(row.length > 0) {
                resData.track = row[0];
                res.status(200).json(resData);
            } else {
                resData.success = false;
                resData.message = 'Track not found';
                res.status(404).json(resData);
            }
        });
    } else {
        resData.success = false;
        resData.message = 'Track not found';
        res.status(404).json(resData);
    }
};

exports.put = (req, res) => {
    let query = "UPDATE tracks SET ";
    const resData = {
        success: true
    };

    if(req.params.id && Number(req.params.id) && req.body.title) {
        if(req.body.artistName && req.body.userid) {
            query = query + "title = '" + req.body.title + "', artist = '" + req.body.artistName + "', userid = " + req.body.userid;
        }
        query = query + " WHERE id = " + req.params.id;
        db.query(query, (err, row) => {
            if(err) {
                console.error('Error:', err);
            }
            if(typeof row.affectedRows !== 'undefined' && row.affectedRows === 1) {
                res.status(200).json(resData);
            } else {
                resData.success = false;
                resData.message = 'Cannot update the track';
                res.status(404).json(resData);
            }
        });
    } else {
        resData.success = false;
        resData.message = 'Track not found';
        res.status(404).json(resData);
    }
};