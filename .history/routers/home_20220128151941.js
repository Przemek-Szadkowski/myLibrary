const { Router } = require("express");
const { BookRecord } = require("../records/book.record");

const homeRouter = Router();

homeRouter
    .get('/', async (req, res) => {
        const books = await BookRecord.listAll();
        const readingBooks = books.filter(book => book.isReading === '1');
        console.log(readingBooks);
        res.render('currentRead/current');
    });

module.exports = {
    homeRouter,
}