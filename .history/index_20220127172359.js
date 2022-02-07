const express = require("express");
const methodOverride = require("method-override");
const { engine } = require("express-handlebars");
const { handleError } = require('./utils/error');
const { booksRouter } = require("./routers/books");

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
// app.use(express.json());
app.engine('.hbs', engine({
    extname: '.hbs',
    // helpers: handlebarsHelpers,
}));
app.set('view engine', '.hbs');


app.get('/', (req, res) => {
    res.render('currentRead/current');
});
app.use('/books', booksRouter);

app.use(handleError);

app.listen(3000, 'localhost', () => {
    console.log('Listening on http://localhost:3000');
});