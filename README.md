## How to clone this Project

This is a simple book store project that allows users to add book, edit book, archive book and delete book.

- Clone Project.
- composer update
- cp .env.example .env
- Setup Database credentials
- php artisan key:generate
- npm install
- npm run dev
- register as new user
- Add book


## Question #2: Briefly explain the meaning of CORS and how it relates to web development

Cross Site Resource Sharing (CORS) It's an HTTP header  based mechanism that allows your server to permit other domain to get access to resources hosted on your server. By default browsers disable it for good reasons, however for security reasons, browsers restrict cross-origin HTTP requests initiated from scripts except the response from other origins includes the right CORS headers..

Note. From Laravel version 7 the framework comes with first-party support for sending CORS headers using Middlewares. 