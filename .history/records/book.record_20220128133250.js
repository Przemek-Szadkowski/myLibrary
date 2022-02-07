const res = require("express/lib/response");
const { pool } = require("../utils/db")

class BookRecord {
    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `books`");
        return results;
    }
};

module.exports = {
    BookRecord,
};