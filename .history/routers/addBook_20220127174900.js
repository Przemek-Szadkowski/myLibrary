const { Router } = require("express");

const addBookRouter = Router();

addBookRouter
    .get('/', (req, res) => {
        res.render('addBook/add');
    });

module.exports = {
    addBookRouter,
}