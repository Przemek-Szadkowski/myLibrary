const { Router } = require("express");
const { BookRecord } = require("../records/book.record");

const homeRouter = Router();

homeRouter
    .get('/', (req, res) => {
        const books = await BookRecord.listAll();
        const readingBooks = books.filter(book => !book.isReading);
        console.log(readingBooks);
        res.render('currentRead/current');
    });

module.exports = {
    homeRouter,
}