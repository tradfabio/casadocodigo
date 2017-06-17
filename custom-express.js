const express = require("express");
const load = require("express-load");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('./public'));

//const prodRoutes = require(./routes/produtos);
//prodRoutes(app);

load('routes').into(app); //require("./routes/produtos")(app);

module.exports = app;
//export = app
