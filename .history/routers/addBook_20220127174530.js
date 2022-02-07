const { Router } = require("express");

const addBookRouter = Router();

addBookRouter
    .get('/', (req, res) => {
        res.render('currentRead/current');
    });

module.exports = {
    addBookRouter,
}