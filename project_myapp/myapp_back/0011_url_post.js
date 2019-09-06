var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.locals.pretty = true;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false } ))
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/form', function(req, res) {
  res.render('form');
});

app.post('/form_receiver', function(req, res) {
  var title = req.body.title;
  var desp = req.body.description;

  res.send(title + ',' + desp);
});

app.listen(3000, function() {
  console.log('Connected 3000 port');
});
