// controller for About page
const aboutController = (req, res) => {
    res.render("about", { title: 'About' });
}

module.exports = aboutController;