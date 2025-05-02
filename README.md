# 🌱 HaruPlant

> **식물 물 주기 관리 + 커뮤니티 기반 플랫폼**  
> 식물을 키우는 사용자들이 물 주는 주기를 쉽게 기록하고 관리하며,  
> 다른 사람들과 화분 정보를 공유할 수 있도록 돕는 서비스입니다.
> Laravel + Blade를 기반으로 MVP를 빠르게 구축하였습니다.

---

## 🧩 주요 기능

### ✅ 사용자 기능
- 회원가입, 로그인 / 로그아웃 (Laravel Breeze)
- 내 화단 관리 (CRUD): 화분 등록, 수정, 삭제, 목록, 상세조회
- 모두의 화단: 다른 사람의 화분 조회, 좋아요, 댓글 기능
- 마이페이지: 회원 정보 수정, 비밀번호 변경, 탈퇴

### ✅ 관리자 기능 (Admin Role)
- 회원 관리: 리스트, 차단/삭제, 검색, 엑셀 다운로드
- 화분 관리: 게시글 리스트/삭제
- 공지사항 관리: 등록, 수정, 삭제 (CURD)

---

## 🛠 기술 스택

| 분야          | 기술                                |
|--------------|------------------------------------|
| **Backend**  | Laravel 11 (PHP 8.3)               |
| **Frontend** | Blade Templating Engine            |
| **CSS**      | Tailwind CSS                       |
| **Database** | MySQL                              |
| **Auth**     | Laravel Breeze                     |
| **ORM**      | Eloquent ORM                       |
| **DevOps**   | Docker, Docker Compose             |
| **Tool**     | PhpStorm, Postman, GitHub          |

---

## 🗂 프로젝트 구조

/backend (Laravel)   
├── routes/   
│ ├── api.php   
│ └── web.php   
├── app/   
│ ├── Http/Controllers/   
│ ├── Models/   
├── tests/   
/frontend   
├── resources/views/   
│ ├── layouts/ # 공통 레이아웃   
│ ├── auth/ # 로그인, 회원가입   
│ ├── plants/ # 내 화단 관련 페이지   
│ └── community/ # 모두의 화단   
│ └── profile/ # 마이페이지      
│ └── admin/ # 관리자   
│ └── notices/ # 공지사항   
/docker   
├── docker-compose.yml   
├── Dockerfile.backend   
└── Dockerfile.frontend
---

## 📍 라우팅 설계

- `/login`, `/register` : 인증
- `/my-plants` : 내 화단 목록
- `/my-plants/create` : 화분 등록
- `/community` : 모두의 화단
- `/admin/users` : 관리자 전용 사용자 관리
- `/notices` : 공지사항 목록/상세

---

## 🚀 실행 방법

### 1. 프로젝트 설치
```bash

git clone https://github.com/bam515/haruplant-laravel.git
cd haruplant
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate

```

### 2. 개발 서버 실행
```bash

php artisan serve
```

3. `Docker` 실행
```bash

docker-compose up --build
```

## 🔐 인증 방식
- Laravel Breeze 기반 세션 인증
- 로그인 유지, 사용자 권한 (role) 기반 미들웨어 처리

## 🧠 리팩토링 예정
- React + API 기반 SPA 리팩토링

- Spring Boot 기반 마이그레이션 (Java + JPA)

- 알림 기능 (FCM / 이메일)

- 캘린더 연동 기능 (Google Calendar API)

## 📚 API 문서
Swagger (OpenAPI 3.0) 기반 자동 문서 생성
접속: http://localhost:8000/api/documentation



## 👨💻 개발자 정보
이름: 승범

기술 블로그: velog.io/@devbam515

GitHub: github.com/bam515

기술 관심사: Java/Spring, PHP/Laravel

