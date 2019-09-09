var express = require('express');
var app = express();

var fs = require('fs');
var walk = require('walk');
var path = require('path');

app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
	res.send('<h1>Hello HomePage</h1>');
})

app.get('/list/html/', function(req, res) {
	var walker = walk.walk('public/html', {followLinks: false});

	var files = [];
	walker.on('file', function(root, stat, next){
		rootReplacedName = root.replace('public/html\\', '').replace('\\', '/')
		console.log('rootReplacedName : ', rootReplacedName, 'stat.name', stat.name)
		// '/'가 아닌 w로 경로가 표시되서 보기 안 좋아서 바꿈
		// files.push(path.join(rootReplacedName,stat.name));
		files.push(rootReplacedName + '/' + stat.name);
		next();
	})

	walker.on('errors', function(root, nodeStatArray, next) {
		res.status(500).send('Internal Server Error');
	});
	
	//file 처리가 다 완료되면 호출된다...
		//res.render 밑에 정의했더니..파일이 읽는 먼저 처리되서 []로 나옴
		//파일에 대한 목록을 표시하고 싶다면 이 메소드 하위에 res.render를 호출해야 한다.
	walker.on('end', function() {
		files.shift()
		res.render('list', {topics:files});
	});

	// var test = [];
	// test.push('111.html')
	// test.push('222.html')
	// console.log('files =============================',test, typeof(test))
	// res.render('list', {topics:test});
})

//디렉토리 내에 모든 폴더를 읽어오기 위해서 walk로 변경했다.
// app.get('/list/html/', function(req, res) {
// 	console.log('/list/html')
//   fs.readdir('public/html', function(err,files){
//     if(err){
//       console.log("first"+err);
//       res.status(500).send('Internal Server Error');
// 		}
// 		console.log('files =============================',files)
//     res.render('list', {topics:files});
//   });
// });

app.listen(3000, function(){
	console.log('Connected 3000 port');
});