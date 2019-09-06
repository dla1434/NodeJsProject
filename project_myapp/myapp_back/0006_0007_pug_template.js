var express = require('express');
var app = express();

app.locals.pretty = true;
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/templete', function(req, res){
    // res.render('temp', {time:'hello'});
    // res.render('temp', {time:Date()});
		res.render('temp', {time:Date(), _title:'jade'});
});

app.listen(3000, function(){
	console.log('Connected 3000 port');
});
