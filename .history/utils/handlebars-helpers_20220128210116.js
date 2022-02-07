
Handlebars.registerHelper('cover', function (book) {
    return book => book.cover === 'hard';
})

module.exports = {
    handelbarsHelpers,
}