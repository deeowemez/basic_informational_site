const asyncHandler = require("express-async-handler");

// // Reusable function to send files and handle errors
// const sendFileWithFallback = (res, filePath) => {
//     res.sendFile(filePath, function (err) {
//         if (err) {
//             res.status(404).sendFile(path.join(__dirname, '404.html'));
//         } else {
//             console.log("Sent");
//         }
//     });
// };

// const getAboutPage = asyncHandler(async (req,res) => {
//     app.get("/", (req, res) => sendFileWithFallback(res, path.join(__dirname, 'about.html')));
// });

// app.get("/", (req, res) => {
//     res.render("index", { links: links, users: users });
// });

const getAboutPage = asyncHandler(async (req, res) => {
    res.render("index", { message: 'IM SUSSY ADEE (2.0) 🐶' });
});

module.exports = { getAboutPage };