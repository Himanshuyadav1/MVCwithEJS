const express = require('express');
// creating instance from Router class
const router = express.Router();

//Route for Home page
router.get('/', (req, res) => {
    res.send('Home Page');
});

//Route for About page
router.get('/about', (req, res) => {
    res.send('About Page');
});

//handlin for 404 error
router.get('*', (req, res) => {
    res.send("404 Not Found!!")
})

module.exports = router;