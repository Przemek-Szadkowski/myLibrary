const { Router } = require("express");
const { BookRecord } = require("../records/book.record");

const addBookRouter = Router();

addBookRouter
    .get('/', (req, res) => {
        res.render('addBook/add');
    })
    .post('/', async (req, res) => {
        const data = {
            ...req.body,
            year: Number(req.body.year),
            isReading: req.body.isReading === 'on' ? true : false,
        };
        const newBook = new BookRecord(data);
        await newBook.insert();
    });

module.exports = {
    addBookRouter,
}