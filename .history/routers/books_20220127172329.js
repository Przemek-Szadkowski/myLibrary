const { Router } = require("express");

const booksRouter = Router();

booksRouter
    .get('/', (req, res) => {
        res.redirect('/books');
    });

module.exports = {
    booksRouter,
}