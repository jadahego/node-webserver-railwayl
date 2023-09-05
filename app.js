const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;


// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estatico
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Heidi',
        titulo: 'Flaca hermosa'
    });
  })
  
  app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Heidi',
        titulo: 'Flaca hermosa'
  });
})

  app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Heidi',
        titulo: 'Flaca hermosa'
  });
})

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })