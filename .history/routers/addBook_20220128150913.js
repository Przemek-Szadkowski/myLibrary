const { Router } = require("express");
const { BookRecord } = require("../records/book.record");

const addBookRouter = Router();

addBookRouter
    .get('/', (req, res) => {
        res.render('addBook/add');
    })
    .post('/', async (req, res) => {
        console.log("First: " + req.body);
        const data = {
            ...req.body,
            year: Number(req.body.year),
            isReading: req.body.isReading === 'on' ? true : false,
        };
        console.log("Second: " + data);
        const newBook = new BookRecord(data);
        await newBook.insert();
        res.render('addBook/added');
    });

module.exports = {
    addBookRouter,
}