const { Router } = require("express");

const homeRouter = Router();

homeRouter
    .get('/', (req, res) => {
        res.render('currentRead/current');
    });

module.exports = {
    homeRouter,
}