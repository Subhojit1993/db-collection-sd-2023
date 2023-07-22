const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
const port = process.env.PORT || 3000;

// set middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// import routes
const routes = require('./routes/Routes');
app.use('/', routes);

//start server
app.listen(port, () => {
    console.log(`Server is up on port: ${port}`);
});