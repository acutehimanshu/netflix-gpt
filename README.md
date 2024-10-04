# PROJECT NAME: NETFLIX-GPT

# Steps to Configure
* Create react app 
* Configure Tailwind


# Commands
> npx create-react-app netflix-gpt
> npm install -D tailwindcss
> npx tailwindcss init 
> npm i -D react-router-dom
> npm run build
> npm install @reduxjs/toolkit
> npm install react-redux

# Firebase Commands
> npm install firebase
> npm install -g firebase-tools
> firebase login
> firebase init
> firebase deploy

# Features
    - Authentication process
        - Sign in / sign up form
        - Redirection to browse page
    - Browser (After authentication)
        - Header
        - Main movie
            - Trailer in background
            - Title & Description
            - Movie suggestions
                - Movie list * N
    - NetflixGPT
        - Search Bar
        - Movie Suggestions


# Suggestions
- For Form we can use FormiK (https://formik.org/)

# Redux 
  - https://redux-toolkit.js.org/introduction/getting-started
  
# Firebase Details
install firebase CLI
> npm install -g firebase-tools
Login on Firebase
> firebase login 
    (Click on given url to authenticate)
initilize Firebase
> firebase init 
(select with space then press enter)
select hosting plans
select existing project 

? What do you want to use as your public directory? build
Ans: based on project for us its build directory. 
? Configure as a single-page app (rewrite all urls to /index.html)? No
? Set up automatic builds and deploys with GitHub? No

>npm run build
deploy command
>firebase deploy

Additional points
how to use useRef hook. 

