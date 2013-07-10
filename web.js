var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buf = new Buffer(27);
    var fs = require('fs');
    fs.readFileSync('index.html',function (err, data) {
        if (err) throw err;
        response.send(buf.toString(data));
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});