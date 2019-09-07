var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
	res.send('<h1>Hello HomePage</h1>');
})

app.get('/route', function(req, res){
	res.send('Hello Router, <img src="/route.jpg">');
})

//server에서 작성한 html 보여주기
app.get('/dynamic', function(req, res){
	var output = `<!DOCTYPE html>
			<html lang="en">
			<head>
					<meta charset="UTF-8">
					<title>Document</title>
			</head>
			<body>
					이 페이지는 nodejs server에서 작성한 html 태그를 보여줍니다.!!
			</body>
			</html>`;
	res.send(output);
})

//server에서 작성한 html 보여주기 :: for문을 사용해서 li 만들기
	//for문을 사용해서 li는 변수에 담아서 사용할 수 있다.
app.get('/dynamic/loop/li', function(req, res){
	var liTags='';
	for(var i=0; i<5; i++){
		liTags = liTags + '<li>codoing</li>'
	}

	var time = new Date();
	var output = `
		<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<title>Document</title>
			</head>
			<body>
				Hello, Dynamic!!
				<ul>
					${liTags}
				</ul>
				${time}
			</body>
			</html>
		`;
	res.send(output);
})

app.get('/templete/pug', function(req, res){
	res.render('temp');
});

app.listen(3000, function(){
	console.log('Connected 3000 port');
});