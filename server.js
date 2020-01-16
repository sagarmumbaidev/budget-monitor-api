const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
//const expenseRoutes = require('./app/routes/expense.routes.js');
const routes = require('./app/routes/routes.js');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

//routes
app.use(routes);

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Expense Monitor application. Organize and keep track of all your expenses."});
});



// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});