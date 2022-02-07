const { pool } = require("../utils/db");
const { ValidationError } = require("../utils/error");
const {v4: uuid} = require('uuid');

class BookRecord {

    constructor(obj) {
        this.validate(obj);
        
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.cover = cover;
        this.isReading = isReading;
    }

    static validate(obj) {
        if(!obj.title || !obj.author || !obj.cover) {
            throw new ValidationError('You have to type book title, author and type of cover!');
        };
    }

    async insert() {
        if(!this.id) {
            this.id = uuid();
        };

        await pool.execute("INSERT INTO `books` VALUES(:id, :title, :author, :year, :cover, :isReading)", {
            id: this.id,
            title: this.title,
            author: this.author,
            year: this.year,
            cover: this.cover,
            isReading: this.isReading,
        });

        return this.id;
    }

    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `books`");
        return results;
    }
};

module.exports = {
    BookRecord,
};