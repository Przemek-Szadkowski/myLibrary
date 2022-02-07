const express = require("express");
require('express-async-errors');
const methodOverride = require("method-override");
const { engine } = require("express-handlebars");
const { handleError } = require('./utils/error');
const { homeRouter } = require("./routers/home");
const { booksRouter } = require("./routers/books");
const { bookRouter } = require("./routers/book");
require('./utils/db');

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
// app.use(express.json());
app.engine('.hbs', engine({
    extname: '.hbs',
    helpers: {
        checkHard: book => book.cover === 'hard',
        checkSoft: book => book.cover === 'soft',
        checkRead: book => book.isReading === 1,
    }
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/books', booksRouter);
app.use('/add', bookRouter);

app.use(handleError);

app.listen(3000, 'localhost', () => {
    console.log('Listening on http://localhost:3000');
});
