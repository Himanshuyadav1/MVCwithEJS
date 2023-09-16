const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes/router');
const path = require('path');

// Setting static directory absolute path 
app.use(express.static(path.join( process.cwd() , 'public')));

// Using router for each route
app.use('/', router);

// Setting template engine
app.set('view engine', 'ejs');

// listening the server
app.listen(port, () => {
    console.log(`Your server is running at http://localhost:${port}`);
});