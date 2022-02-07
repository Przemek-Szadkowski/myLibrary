const { Router } = require("express");
const { BookRecord } = require("../records/book.record");

const addBookRouter = Router();

addBookRouter
    .get('/', (req, res) => {
        res.render('addBook/add');
    })
    .get('/:id', (req, res) => {
        console.log(req.body);
    })
    .post('/', async (req, res) => {

        const data = {
            ...req.body,
            year: Number(req.body.year),
            isReading: req.body.isReading === 'on' ? 1 : 0,
        };

        const newBook = new BookRecord(data);
        await newBook.insert();
        res.render('addBook/added');
    });

module.exports = {
    addBookRouter,
}