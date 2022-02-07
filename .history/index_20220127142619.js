const express = require('express');

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({
    extended: true,
}))
