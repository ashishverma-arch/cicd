var http = require('http');

var server = http.createServer(function(req, resp) {

    resp.writeHead(200, {"Content-Type": "text/plain"});
    resp.end("Hello World!");

});

var port = 80;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
