const { Router } = require("express");
const { BookRecord } = require("../records/book.record");
const { NotFoundError } = require("../utils/error");

const booksRouter = Router();

booksRouter
    .get('/', async (req, res) => {
        const books = await BookRecord.listAll();
        if(!books) {
            throw new NotFoundError;
        }
        res.render('books/list', {
            books,
        });
    });

module.exports = {
    booksRouter,
}