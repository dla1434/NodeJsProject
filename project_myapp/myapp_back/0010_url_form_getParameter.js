var express = require('express');
var app = express();

app.locals.pretty = true;
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/form', function(req, res) {
  res.render('form');
});

app.get('/form_receiver', function(req, res) {
  var title = req.query.title;
  var desp = req.query.description;

  res.send(title + ',' + desp);
});

app.listen(3000, function() {
  console.log('Connected 3000 port');
});
