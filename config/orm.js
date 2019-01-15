var express = require("express");
var bodyParser = require("body-parser");

var PORT = 8080;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("/public"));



var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/index.js", routes);

app.listen(PORT, function () {
    console.log("App listening on Port " + PORT);
});