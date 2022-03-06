const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    // host: 'eu-cdbr-west-02.cleardb.net',
    // user: process.env['DATABASE_USER'],
    // password: process.env['DATABASE_PASSWORD'],
    host: 'localhost',
    user: 'root',
    database: 'library',
    // database: 'heroku_de177c4c835023e',
    namedPlaceholders: true,
    decimalNumbers: true,
});

module.exports = {
    pool,
}

