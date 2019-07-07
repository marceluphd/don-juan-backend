# don-juan-backend

Don Juan is an app that can be used to manage the orders of a pizzeria. The mobile app can be used by pizzeria clients and the web version should be used by the administrator.

This app was built to complete the Rocketseat Bootcamp.

## How to start the backend server

1. Set **all** the variables inside `.env.example` file and rename it to `.env`.
2. Run the migrations and seed the database: `adonis migration:run --seed` (take a look at the `DatabaseSeeder.js` file to see the credentials used to log in the app).
3. Install the project dependencies: `npm install`.
4. Start the server: `npm run dev`.
5. Start the kue listener: `npm run queue`.
6. Send requests to `http://localhost:3333`.

## Mobile project

You can find the mobile project [here](https://github.com/lcnogueira/don-juan-mobile).

## Web project

You can find the web project [here](https://github.com/lcnogueira/don-juan-frontend).

## Used technologies/libraries

- adonisjs
- adonisjs/mail
- adonisjs/redis
- adonis-acl
- adonis-kue
- adonis-sentry
- aws-sdk

### Adonis

This project was bootstrapped with [Adonisjs Framework](https://adonisjs.com/).
