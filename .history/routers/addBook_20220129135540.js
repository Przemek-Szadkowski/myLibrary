const { Router } = require("express");
const { BookRecord } = require("../records/book.record");

const addBookRouter = Router();

addBookRouter
    .get('/', (req, res) => {
        res.render('addBook/add');
    })
    .get('/:id', async (req, res) => {
        const book = await BookRecord.getOne(req.params.id);
        res.render('addBook/edit', {
            book,
        });
        res.render('addBook/updated');
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