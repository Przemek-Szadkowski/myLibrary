const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'bb92bf22f18245',
    password: '221961e1',
    database: 'books',
    namedPlaceholders: true,
    decimalNumbers: true,
});

module.exports = {
    pool,
}