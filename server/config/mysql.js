const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    database: 'bquate_test_musica',
    debug: false
});

module.exports = pool;