var http = require('http');
var dateTime = require('./datetime');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("This is the current time: " + dateTime.date());
    res.end("");
}).listen(8080);
