var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.locals.pretty = true;

app.set('views', './views');
app.set('view engine', 'pug');

// 1. template 호출
app.get('/topic/new', function(req, res) {
  res.render('new');
});

// 2. form post submit 처리
app.post('/topic', function(req, res) {
  var title = req.body.title;
  var desp = req.body.desp;
  fs.writeFile('data/'+title, desp, function(err){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.send('Success!');
  });
});

app.listen(3000, function() {
  console.log('Connected, 3000 Port!!');
});
