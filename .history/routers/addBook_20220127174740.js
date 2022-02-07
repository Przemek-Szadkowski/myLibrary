const { Router } = require("express");

const addBookRouter = Router();

addBookRouter
    .get('/add', (req, res) => {
        res.render('addBook/add');
    });

module.exports = {
    addBookRouter,
}