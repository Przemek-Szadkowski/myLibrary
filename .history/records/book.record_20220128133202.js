const { pool } = require("../utils/db")

class BookRecord {
    static listAll() {
        return pool.execute("SELECT * FROM `books`");
    }
}

module.exports = {
    BookRecord,
}