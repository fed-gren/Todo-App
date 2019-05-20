# Todo App


## How to deploy web server (Ubuntu 14.04LTS 기준)

### Heroku 설치

```
$ curl https://cli-assets.heroku.com/install.sh | sh
```

### Heroku 로그인

아래 명령어를 입력한 뒤 Email과 password를 순서대로 입력하여 로그인한다.
```
$ heroku login -i
heroku: Enter your login credentials
Email: [your@email.com]
Password: [your password]
Logged in as [your@email.com]
```

### Heroku App 생성

아래 명령어를 입력하여 app을 생성한다.
```
$ heroku apps:create [APP_NAME]
Creating ⬢ [APP_NAME]... done
https://[APP_NAME].herokuapp.com/ | https://git.heroku.com/[APP_NAME].git
```

### Database 생성 (MySQL)

heroku에서 MySQL은 ClearDB이다. 아래 명령어를 통해 app에 MySQL을 붙일 수 있다.
```
$ heroku addons:create cleardb:ignite -a [APP_NAME]
Creating cleardb:ignite on ⬢ [APP_NAME]... free
Created cleardb-shallow-92283 as CLEARDB_DATABASE_URL
Use heroku addons:docs cleardb to view documentation
```

---

### API 서버 배포

API 서버를 배포하기 위해 Github 저장소에서 내려받은 뒤 해당 디렉토리로 이동한다.
```
$ git clone https://github.com/fed-gren/Todo-App-Api
$ cd Todo-App-Api
```
heroku git 원격 저장소에 연결한다.
```
$ heroku git:remote -a [APP_NAME]
set git remote heroku to https://git.heroku.com/[APP_NAME].git
```

heroku에 push한다.
```
$ git push heroku master
```

배포가 완료되면 아래와 같은 메세지가 나온다.
```
remote: -----> Launching...
remote:        Released v5
remote:        https://[APP_NAME].herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/[APP_NAME].git
 * [new branch]      master -> master
```

배포된 경로(https://[APP_NAME].herokuapp.com/)로 접속하여 정상적으로 배포되었는지 확인한다.

---

### Client 배포

Client 배포를 위한 Heroku 앱 생성을 위해 위 Heroku App 생성 과정을 진행한다. 이 때, API 서버와 다른 이름으로 생성하여야 한다.
Client를 배포하기 위해 Github 저장소에서 내려받은 뒤 해당 디렉토리로 이동한다.
```
$ git clone https://github.com/fed-gren/Todo-App-Client
$ cd Todo-App-Client
```
heroku git 원격 저장소에 연결한다.
```
$ heroku git:remote -a [APP_NAME]
set git remote heroku to https://git.heroku.com/[APP_NAME].git
```

heroku에 push한다.
```
$ git push heroku master
```

배포가 완료되면 아래와 같은 메세지가 나온다.
```
remote: -----> Launching...
remote:        Released v5
remote:        https://[APP_NAME].herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/[APP_NAME].git
 * [new branch]      master -> master
```

배포된 경로(https://[APP_NAME].herokuapp.com/)로 접속하여 정상적으로 배포되었는지 확인한다.

---
<br>

## Tech stack

### Front-end

- React(create-react-app)

### Back-end

- Server : Node.js (v10.15.3)
- DB : MySQL (v8.0.16)