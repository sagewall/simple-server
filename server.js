var express = require("express");
var serveStatic = require("serve-static");

var app = express();

app.use(serveStatic("static", { acceptRanges: false, setHeaders: setHeaders }));

app.listen(3000);
console.log("Server started on http://localhost:3000");

function setHeaders(res, path) {
  if (path.includes("CORS_enabled")) {
    res.setHeader("Access-Control-Allow-Origin", "*");
  }
}
