// controller for Home page
const homeController = (req, res) => {
    res.render("index", { title: 'Home' });
}

module.exports = homeController;