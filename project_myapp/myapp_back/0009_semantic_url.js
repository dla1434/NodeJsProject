var express = require('express');
var app = express();

app.locals.pretty = true;
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/topic/:id/:mode', function(req, res) {
  res.send(req.params.id + ',' + req.params.mode);
});

app.get('/topic/:id', function(req, res) {
  var topics = [
    'JavaScript is....',
    'NodeJS is..',
    'Express is...'
  ];

  var output = `
    <a href="/topic?id=0">JavaScript</a><br>
    <a href="/topic?id=1">NodeJS</a><br>
    <a href="/topic?id=2">Express</a><br><br>
    ${topics[req.params.id]}
  `;

  res.send(output);
});

app.listen(3000, function() {
  console.log('Connected 3000 port');
});
