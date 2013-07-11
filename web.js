var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs = require("fs");
    var data;
    try {
        data = fs.readFileSync("index.html","utf8");
    } catch (e) {
        response.send("Error: Cannot open file!");
    }
/*    var buf = new Buffer(data.length);
    buf.write(data,"utf8");
    response.send(buf.toString("utf8"));*/
    response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});