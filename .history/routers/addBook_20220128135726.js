const { Router } = require("express");

const addBookRouter = Router();

addBookRouter
    .get('/', (req, res) => {
        res.render('addBook/add');
    })
    .post('/', (req, res) => {
        console.log(req.body);
    });

module.exports = {
    addBookRouter,
}