var express = require("express");
var serveStatic = require("serve-static");

var app = express();

app.use(serveStatic("static", { acceptRanges: false }));

app.listen(3000);
console.log("Server started on http://localhost:3000");
