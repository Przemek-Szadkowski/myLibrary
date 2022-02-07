const { Router } = require("express");
const { BookRecord } = require("../records/book.record");

const booksRouter = Router();

booksRouter
    .get('/', async (req, res) => {
        const books = await BookRecord.listAll();
        res.render('books/list', {
            books,
        });
    })
    .post('/', (req, res) => {
        console.log(req.body);
    })

module.exports = {
    booksRouter,
}