const { Router } = require("express");
const { BookRecord } = require("../records/book.record");

const booksRouter = Router();

booksRouter
    .get('/', (req, res) => {
        const books = BookRecord.listAll();
        res.render('books/list');
    });

module.exports = {
    booksRouter,
}