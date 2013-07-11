var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
   // response.send("hello");
    var buf = new Buffer(50);
    var fs = require("fs");
/*    var data = fs.readFileSync('index.html','utf8');
    buf.write("Hello","utf-8");
    response.send(buf.toString("utf-8"));*/
    fs.readFileSync("index.html",function (err, data) {
        if (err) throw err;
        buf.write(data,"utf-8");
        response.send(buf.toString("utf-8"));
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});