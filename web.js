var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buf = new Buffer(27);
    var fs = require("fs");
    var data;
    try {
        data = fs.readFileSync("index.html");
        buf.write(data,"utf-8");
        response.send(buf.toString("utf-8");
    } catch (e) {
        response.send("Error: Cannot open file!");
    }
/*    var data = fs.readFileSync("index.html","utf8");
    buf.write(data);
    response.send(buf.toString("utf-8"));
/*    fs.readFileSync("index.html", function (err,data) {
        if (err) throw err;
        buf.write(data,"utf-8");
        response.send(buf.toString("utf-8"));
    });*/
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});