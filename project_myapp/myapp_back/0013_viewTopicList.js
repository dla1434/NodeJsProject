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

// 1. data 폴더의 파일목록을 리스트로 넘겨준다.
app.get('/topic/', function(req, res) {
  fs.readdir('data', function(err,files){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.render('view', {topics:files});
  });
});

// 2. req 요청이 파일명이고, 해당 파일에 내용을 응답으로 내려준다.
app.get('/topic/:id', function(req, res){
  var id = req.params.id;
  fs.readFile('data/'+id, 'utf-8', function(err,data){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.send(data);
  });
});

app.listen(3000, function() {
  console.log('Connected, 3000 Port!!');
});
