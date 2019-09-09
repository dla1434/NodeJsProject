
import express from 'express';
import expressThymeleaf from 'express-thymeleaf';
import {TemplateEngine} from 'thymeleaf';

var app = express();

var fs = require('fs');
var walk = require('walk');
var path = require('path');

app.use(express.static('public'));

var templateEngine = new TemplateEngine();
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');
app.set('views', './views');

app.get('/', function(req, res){
	// res.send('<h1>Hello HomePage</h1>');
	res.redirect('/index');
})

app.get('/index', function(req, res){
	console.log('/index')
	fs.readdir('public', {withFileTypes: true}, (err, files) => {
		if(err){
			console.log('/index readdir err', err);
			res.status(500).send('Internal Server Error');
		}

		//readdir 호출 시 {withFileTypes: true}를 옵션으로 하게 되면
			//file.isDirectory() 메소드 사용이 가능해서 디렉토리인지 파일인지 구분이 가능하다.
		// path.extname(file) : 확장 구하는 메소드
		const dirNames = files.filter((file) => {
			//filter는 true인 것만 리스트에 포함시킨다.
			if( file.isDirectory() ){
				console.log('isDirectory', file)
				return true;
			}
			else{
				console.log('isNotDirectory', file)
				return false;
			}
			//map은 {withFileTypes: true} 사용 시 
				//다음과 같은 형태로 담기기 때문에 Dirent { name: 'testXml', [Symbol(type)]: 2 }
				//폴더명만 호출하기 위해서 사용했다.
		}).map(dirent => dirent.name);
		
		// files.forEach((file) =>{
		// 	console.log(file, )
		// })

		console.log('dirNames =============================',dirNames)
		res.render('index', {dirs:dirNames});
	});
})

app.get('/list/:folder/', function(req, res) {
	var walker = walk.walk('public/' + req.params.folder, {followLinks: false});

	var files = [];
	walker.on('file', function(root, stat, next){
		repalcedName = 'public/' + req.params.folder + '\\';
		rootReplacedName = root.replace(repalcedName, '').replace('\\', '/')
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
		res.render('list', {files:files,rootUrl:req.params.folder});
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