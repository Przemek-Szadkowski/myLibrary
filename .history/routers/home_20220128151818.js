const { Router } = require("express");
const { BookRecord } = require("../records/book.record");

const homeRouter = Router();

homeRouter
    .get('/', async (req, res) => {
        const books = await BookRecord.listAll();
        const readingBooks = books.filter(book => console.log(book););
        console.log(readingBooks);
        res.render('currentRead/current');
    });

module.exports = {
    homeRouter,
}