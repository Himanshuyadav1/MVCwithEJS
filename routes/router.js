const express = require('express');
// creating instance from Router class
const router = express.Router();
//getting controllers
const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const errorController = require('../controllers/errorController');

//Route for Home page
router.get('/', homeController);

//Route for About page
router.get('/about', aboutController);

//handlin for 404 error
router.get('*', errorController);

module.exports = router;