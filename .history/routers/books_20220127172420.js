const { Router } = require("express");

const booksRouter = Router();

booksRouter
    .get('/', (req, res) => {
        res.render('books/list');
    });

module.exports = {
    booksRouter,
}