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
    })
    .patch('/:id', async (req, res) => {

        console.log(req.body);

        const data = {
            ...req.body,
            year: Number(req.body.year),
            isReading: req.body.isReading === 'on' ? 1 : 0,
        };

        const newBook = new BookRecord(data);
        await newBook.update();
        res.render('addBook/updated');
    });

module.exports = {
    addBookRouter,
}