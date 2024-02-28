// load up the express framework and body-parser helper
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const bodyParser = require('body-parser');

// create an instance of express to serve our end points
const app = express();

// Middleware to allow only GET requests
const allowOnlyGet = (req, res, next) => {
  if (req.method !== 'GET') {
    return res.status(405).send('Method Not Allowed');
  }
  next();
};


// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files
const fs = require('fs');

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(allowOnlyGet);


// this is where we'll handle our various routes from
const routes = require('./routes/routes.js')(app, fs);

// finally, launch our server on port 3001.
const server = app.listen(3001, () => {
  console.log('listening on port %s...', server.address().port);
});