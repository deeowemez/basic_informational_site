// app.js
const express = require('express');
const path = require("node:path");
const app = express();
const aboutRouter = require('/home/aian/repos/basic-informational-site/routes/aboutRoutes.js');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/about', aboutRouter);
app.use(express.static('public'));

// app.get("/", (req, res) => {
//     res.render("index", { links: links, users: users });
// });

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));