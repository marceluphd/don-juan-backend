# don-juan-backend

## How to start

- Set **all** the variables inside `.env` file.
- Run the migrations and seed the database: `adonis migration:run --seed` (take a look at the `DatabaseSeeder.js` file to see the credentials used to log in the app)
- Install the project dependencies: `npm install`
- Start the server: `npm run dev`
- Start the kue listener: `npm run queue`
- Send requests to `http://localhost:3333`

### Adonis

This project was bootstrapped with [Adonisjs Framework](https://adonisjs.com/).
