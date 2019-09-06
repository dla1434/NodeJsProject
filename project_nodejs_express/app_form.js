var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

var fs = require('fs');

app.locals.pretty = true;

app.get('/', function(req, res) {
  res.send('<h1>Hello HomePage</h1>');
});

app.get('/form', function(req, res) {
  console.log('form view');
  res.render('form');
});

app.get('/form_receiver', function(req, res) {
  var title = req.query.title;
  var desp = req.query.description;

  res.send(title + ',' + desp);
});

app.get('/form/post', function(req, res) {
  console.log('form post view');
  res.render('formPost');
});

app.post('/form_receiver/post', function(req, res) {
  var title = req.body.title;
  var desp = req.body.description;

  fs.writeFile('data/' + title, desp, function(err) {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.send('Success!');
  });
});

app.get('/lists', function(req, res) {
  fs.readdir('data', function(err, files) {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.render('lists', {
      lists: files
    });
  });
});

app.get('/lists/:id', function(req, res) {
  var id = req.params.id;
  fs.readFile('data/' + id, 'utf-8', function(err, data) {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.send(data);
  });
});

app.listen(3000, function() {
  console.log('Connected 3000 port');
});
