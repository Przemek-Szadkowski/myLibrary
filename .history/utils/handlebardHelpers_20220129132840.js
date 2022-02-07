const handelbars = require("express-handlebars");

const hbs = handelbars.create({
    helpers: {
        checkCover: book => book.cover === 'hard';
    }
});

module.exports = {
    hbs,
}