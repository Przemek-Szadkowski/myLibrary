const { Router } = require("express");
const { BookRecord } = require("../records/book.record");
const { NotFoundError } = require("../utils/error");

const bookRouter = Router();

bookRouter
    .get('/', (req, res) => {
        res.render('addBook/add');
    })
    .get('/:id', async (req, res) => {
        const book = await BookRecord.getOne(req.params.id);

        if(book === null) {
            throw new NotFoundError;
        }

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
        const book = await BookRecord.getOne(req.params.id);

        if(book === null) {
            throw new NotFoundError;
        }
    
        const newBook = {
            ...book,
            ...req.body,
            isReading: req.body.isReading === 'on' ? 1 : 0,
        };

        const newDataBook = await new BookRecord(newBook)
        newDataBook.update();

        res.render('addBook/updated', {
            newDataBook,
        });
    })
    .delete('/:id', async (req, res) => {
        
        const bookToDelete = await BookRecord.getOne(req.params.id);
        bookToDelete.delete();
        res.render('addBook/deleted', {
            bookToDelete,
        });

    });

module.exports = {
    bookRouter,
}