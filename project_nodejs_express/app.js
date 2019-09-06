var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.locals.pretty =  true;

app.get('/', function(req, res) {
  res.send('<h1>Hello HomePage</h1>');
});

app.get('/img/view', function(req, res) {
  res.send('Hello Router, <img src="/img.jpg">');
});

app.get('/dynamic', function(req, res) {
  var output = `<!DOCTYPE html>
								<html lang="en">
								<head>
									<meta charset="UTF-8">
									<title>Document</title>
								</head>
								<body>
									Write Hhtml in Nodejs Server!!
								</body>
								</html>`;
  res.send(output);
});

app.get('/dynamic/for', function(req, res) {
  var liList='';
  for(var i=0; i<5; i++){
    liList= liList + '<li>coding_' + i + '</li>';
  }

  var time = Date();

  var output = `<!DOCTYPE html>
								<html lang="en">
								<head>
									<meta charset="UTF-8">
									<title>Document</title>
								</head>
								<body>
									Write Hhtml in Nodejs Server!!
                  <ul>
                    ${liList}
                  </ul>
                  ${time}
								</body>
								</html>`;
  res.send(output);
});

app.get('/templete/pug', function(req, res){
  console.log('pug template');
  // res.render('temp');
  res.render('temp', {time:Date(), _title:'pug template'});
});

app.get('/templete/pug/js', function(req, res){
  console.log('pug js template');
  res.render('tempJs', {time:Date(), _title:'pug js in template'});
});

app.get('/topic', function(req, res) {
  var topics = [
    'JavaScript is....',
    'NodeJS is..',
    'Express is...'
  ];

  var output = `
						    <a href="/topic?id=0">JavaScript</a><br>
						    <a href="/topic?id=1">NodeJS</a><br>
						    <a href="/topic?id=2">Express</a><br><br>
						    ${topics[req.query.id]}
						  `;

  res.send(output);
});

app.get('/topic/:id', function(req, res) {
  var topics = [
    'JavaScript is....',
    'NodeJS is..',
    'Express is...'
  ];

  var output = `
						    <a href="/topic/0">JavaScript</a><br>
						    <a href="/topic/1">NodeJS</a><br>
						    <a href="/topic/2">Express</a><br><br>
						    ${topics[req.params.id]}
						  `;

  res.send(output);
});

app.get('/topic/:id/:mode', function(req, res) {
  res.send('req.params.id : ' + req.params.id + ', req.params.mode : ' + req.params.mode);
});

app.listen(3000, function() {
  console.log('Connected 3000 port');
});
