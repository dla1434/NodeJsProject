
# 1. test_web_thymeleaf

## 1. 적용 기술
	```
	1. nodejs
	2. express
	3. template engine
			pug : myapp_xxxx 시작 모든 프로젝트 기본 템플릿 엔진
			express-thymeleaf : myapp_thymeleaf에 적용
	```
---

## 2. 개발 히스토리
2. 2019.09.10
	```
	- index.html/list.html에서 검색 기능 추가 
		input에 입력된 값만 필터링 해서 보여준다.
	- npm i jquery 설치
		jquery를 설치해서 script src에 적용하는 거 추가
	- public/resources로 lib 관리하는 걸로 변경
		공통으로 사용되는 js, jqery, css 관리 
		js 소스 중 공통으로 사용될 만한 것도 이 폴더로 이동
	```

1. 2019.09.08
	```
	1. express-thymeleaf 적용
			1. myapp 프로젝트는 pug 기반으로 작성한 반면 이 프로젝트는 html 기반에 express-thymeleaf tempate engine을 적용하였다.
	2. app.get('/index', function(req, res){
			public 폴더에서 폴더목록만 보여준다.(depth1)
	3. app.get('/list/:folder/', function(req, res) {
			/index 페이지에서 링크를 선택하면 public의 하위 폴더에 모든 파일 목록을 보여준다.
			ex) html 클릭 시 public/html 폴더내의 모든 파일을 보여주고..링크 클릭 시 실행도 가능
	```

