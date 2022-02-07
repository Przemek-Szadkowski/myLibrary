const { pool } = require("../utils/db")

class BookRecord {
    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `books`");
    }
};

module.exports = {
    BookRecord,
};