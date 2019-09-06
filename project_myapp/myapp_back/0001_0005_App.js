var express = require('express');
var app = express();

app.locals.pretty = true;
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/templete', function(req, res){
		res.render('temp');
});

app.get('/', function(req, res){
	res.send('Hello HomePage112');
});

app.get('/route', function(req, res){
	res.send('Route, <img src="/img.jpg">');
});

app.get('/dynamic', function(req, res){
	var lis='';
	for(var i=0; i<5; i++){
			lis = lis + '<li>codoing</li>';
	}

	var time = Date();

	var output = `<!DOCTYPE html>
			<html lang="en">
			<head>
					<meta charset="UTF-8">
					<title>Document</title>
			</head>
			<body>
					Hello, static!!
					<ul>
						${lis}
					</ul>
					${time}
			</body>
			</html>`;
	res.send(output);
})

app.listen(3000, function(){
	console.log('Connected 3000 port');
});
