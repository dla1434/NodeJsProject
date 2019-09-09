
# 1. 생활코딩_인프런_Nodejs를 이용해 만든 웹애플리케이션 만들기
1. nodejs
2. express
3. template engine
    pug : myapp_xxxx 시작 모든 프로젝트 기본 템플릿 엔진
    express-thymeleaf : myapp_thymeleaf에 적용
---

## 2. 주요 프로젝트
2. myapp_thymeleaf
    ```
    1. express-thymeleaf 적용
        1. myapp 프로젝트는 pug 기반으로 작성한 반면 이 프로젝트는 html 기반에 express-thymeleaf tempate engine을 적용하였다.
    2. app.get('/index', function(req, res){
        public 폴더에서 폴더목록만 보여준다.(depth1)
    3. app.get('/list/:folder/', function(req, res) {
        /index 페이지에서 링크를 선택하면 public의 하위 폴더에 모든 파일 목록을 보여준다.
        ex) html 클릭 시 public/html 폴더내의 모든 파일을 보여주고..링크 클릭 시 실행도 가능
    ```

1. myapp
    ```
    1. /list/html 요청시 public/html 폴더의 모든 html 파일을 보여준다.
        화면에서 클릭 시 html 실행도 가능하게 링크 작성 완료
    ```

## 3. 순차적 예제 프로젝트
3. myapp_0003
    ```
    ```
    
2. myapp_0002
    ```
    > view 처리 방법 및 pug 사용방법
    0005. View_일반.txt
    0006. View_Templete_Pug.txt
    0007. View_Templete_Pug_상세 사용법.txt
    ```

1. myapp_0001_default  
    ```
    > express 생성 및 http server 기동 완료
    0001. Express install.txt
    0002. SuperVisor install.txt
    0003. Http server 띄우기.txt
    0004. Static 리소스 폴더 지정하기.txt
    ```