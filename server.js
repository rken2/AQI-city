const express = require("express");
const routes = require('./routes/city.js'); // import the routes
const app = express();

app.use(express.json()); // parses incoming requests with JSON payloads

app.use('/', routes); //to use the routes

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})