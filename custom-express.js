const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('./public'));

//const prodRoutes = require(./routes/produtos);
//prodRoutes(app);

require("./routes/produtos")(app);

module.exports = app;
//export = app
