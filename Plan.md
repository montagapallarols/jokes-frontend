FRONTEND

- Main page that displays a random joke.
- User sees the setup first, after a few seconds the punchline appears
- User can log in as an admin to add jokes to database
- Users can share a joke on social media

BACKEND

- Create new ElephantSQL [X]
- Connect to Postgres [X]
- npm init -y [X]
- git init [X]
- touch .gitignore [X]
- Add node_modules to .gitignore file [X]
- Install Sequelize and CLI tools: npm install sequelize sequelize-cli [X]
- Install Postgres: npm i pg [X]
- npx sequelize-cli init [X]
- Do initial commit [X]
- Change config.json file to connect to database with the url [X]
- Check if Sequelize can connect to Postgres by doing a migration [X]

Set up database to store jokes

- Generate models: [X]

npx sequelize-cli model:generate --name user --attributes firstName:string,lastName:string,email:string,password:string,isAdmin:boolean

npx sequelize-cli model:generate --name joke --attributes id:integer,type:string,setup:text,punchline:text

- Add model constraints (allowNull: false / unique: true) [X]
- Migrate to create the tables [X]
- Install bcrypt to hide password user passwords [X]
- Set up salt rounds in config/constants.js file [X]
- Generate seeds for admin user & jokes [X]

Express app

- Install/require express [X]
- Set up port [X]
- Add middleware: express.json() / corsMiddleware() [X]

- Set up endpoint to get a random joke
