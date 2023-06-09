const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico - Midleware
app.use( express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Cristian Gallegos',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Cristian Gallegos',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Cristian Gallegos',
        titulo: 'Curso de Node'
    });
});

app.get('*', function (req, res) {
    res.send('404 | Page not found')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});