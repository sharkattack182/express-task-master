var express = require("express");
var exphbs = require("express-handlebars");


var PORT = process.env.PORT || 5500;

var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  