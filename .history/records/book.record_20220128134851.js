const { pool } = require("../utils/db");
const { ValidationError } = require("../utils/error");
const {v4: uuid} = require('uuid');

class BookRecord {

    constructor(obj) {
        this.validate();
    }

    static validate() {
        if(!obj.title || !obj.author || !obj.cover) {
            throw new ValidationError('You have to type book title, author and type of cover!');
        }

        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.cover = cover;
        this.isReading = isReading;
    }

    async insert() {
        if(!this.id) {

        }
    }

    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `books`");
        return results;
    }
};

module.exports = {
    BookRecord,
};