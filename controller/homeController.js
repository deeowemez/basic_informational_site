const asyncHandler = require("express-async-handler");

const getAboutPage = asyncHandler(async (req, res) => {
    res.render("index", { title: 'sussy', message: 'IM SUSSY (2.0) 🐶' });
});

module.exports = { getAboutPage };