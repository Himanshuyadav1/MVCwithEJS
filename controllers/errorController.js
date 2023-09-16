// controller for 404 page
const errorController = (req, res) => {
    res.send("<h1>404 Page not found</h1>");
}

module.exports = errorController;