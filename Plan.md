FRONTEND

- Install Redux [X]
- Set up store (src/store/index.js)
- Wrap app in Provider

- Main page that displays a random joke.
- User sees the setup first, after a few seconds the punchline appears
- Redux store: jokes (reducer, actions, selectors)
- Login for admin to add jokes
- Users can share the joke on social media

BACKEND

- Create new ElephantSQL
- Connect to Postgres
- npm init -y
- git init
- touch .gitignore
- Add node_modules to .gitignore file
- Install Sequelize and CLI tools: npm install sequelize sequelize-cli
- Install Postgres: npm i pg
- npx sequelize-cli init
- Do initial commit
- Change config.json file to connect to database with the url
- Check if Sequelize can connect to Postgres by doing a migration

- Express app
- Endpoint to get a random joke
- Set up database to store jokes
- Joke: id / setup / punchline
