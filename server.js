const http = require('http');

http.createServer(function(req, res) {
    // if (request.url === '/200') {

    // }
    // response.writeHead(200, { 'Content-Type': 'text/html'});
    // response.write('<h1>Hello</h1>');
    response.end();
}).listen(3000, function() {
    console.log('Helpful startup message...port 3000');
})