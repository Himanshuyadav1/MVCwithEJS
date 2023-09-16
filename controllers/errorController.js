// controller for 404 page
const errorController = (req, res) => {
    res.render("error", { title: '404' });
}

module.exports = errorController;