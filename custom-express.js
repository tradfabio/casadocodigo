const express = require("express");
const load = require("express-load");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}))

//const prodRoutes = require(./routes/produtos);
//prodRoutes(app);

load('routes').into(app); //require("./routes/produtos")(app);

module.exports = app;
//export = app
