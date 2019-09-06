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

app.get('/topic/new', function(req, res) {
  fs.readdir('data', function(err,files){
    if(err){
      console.log("first"+err);
      res.status(500).send('Internal Server Error');
    }
    res.render('new', {topics:files});
  });
});

app.get(['/topic','/topic/:id'], function(req, res) {
  fs.readdir('data', function(err,files){
    if(err){
      console.log("first"+err);
      res.status(500).send('Internal Server Error');
    }

    var id = req.params.id;
    if(id){
      fs.readFile('data/'+id, 'utf-8', function(err,data){
        if(err){
          console.log(err);
          res.status(500).send('Internal Server Error');
        }
        res.render('view', {topics:files,title:id,description:data});
      });
    }
    else{
      res.render('view', {topics:files,title:'Welcome',description:'Hello JavaScript for server'});
    }
  });
});

app.post('/topic', function(req, res) {
	var title = req.body.title;
	var desp = req.body.desp;

	fs.writeFile('data/' + title, desp, function(err) {
		if (err) {
			console.log(err);
			//Send가 있다면 다음 코드는 실행시키지 않는다. 즉 따로 return이 필요없다.
			res.status(500).send('Internal Server Error');
		}
		//기존 res.send('Success'); --> 수정 redirect 처리
		res.redirect('/topic/' + title);
	});
});

app.listen(3000, function() {
  console.log('Connected, 3000 Port!!');
});
