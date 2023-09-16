const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes/router');

// Using router for each route
app.use('/', router);

// listening the server
app.listen(port, () => {
    console.log(`Your server is running at http://localhost:${port}`);
});