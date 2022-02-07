const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'bb92bf22f18245',
    password: '221961e1',
    database: 'heroku_de177c4c835023e',
    namedPlaceholders: true,
    decimalNumbers: true,
});

module.exports = {
    pool,
}