const { pool } = require("../utils/db")

class BookRecord {

    constructor(obj) {
        this.validate();
    }

    static validate() {

    }

    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `books`");
        return results;
    }
};

module.exports = {
    BookRecord,
};