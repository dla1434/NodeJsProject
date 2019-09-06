var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
	res.send('<h1>Hello HomePage</h1>');
})

app.get('/route', function(req, res){
	res.send('Hello Router, <img src="/route.jpg">');
})

app.listen(3000, function(){
	console.log('Connected 3000 port');
});