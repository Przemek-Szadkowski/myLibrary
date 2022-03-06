const { Router } = require("express");
const { BookRecord } = require("../records/book.record");

const booksRouter = Router();

booksRouter
    .get('/', async (req, res) => {
        const books = await BookRecord.listAll();
        res.render('books/list', {
            books,
        });
    });

module.exports = {
    booksRouter,
}