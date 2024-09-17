const express = require("express");
const app = express();
const path = require('path');

// Reusable function to send files and handle errors
const sendFileWithFallback = (res, filePath) => {
    res.sendFile(filePath, function (err) {
        if (err) {
            res.status(404).sendFile(path.join(__dirname, '404.html'));
        } else {
            console.log("Sent");
        }
    });
};

// Define routes
app.get("/", (req, res) => sendFileWithFallback(res, path.join(__dirname, 'index.html')));
app.get("/about", (req, res) => sendFileWithFallback(res, path.join(__dirname, 'about.html')));
app.get("/contact-me", (req, res) => sendFileWithFallback(res, path.join(__dirname, 'contact-me.html')));

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

const PORT = 8080;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
