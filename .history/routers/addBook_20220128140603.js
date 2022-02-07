const { Router } = require("express");

const addBookRouter = Router();

addBookRouter
    .get('/', (req, res) => {
        res.render('addBook/add');
    })
    .post('/', (req, res) => {
        const data = {
            ...req.body,
            year: Number(req.body.year),
            isReading: req.body.isReading === 'on' ? true : false,
        }
    });

module.exports = {
    addBookRouter,
}