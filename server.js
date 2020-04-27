const http = require('http');

http.createServer(function(req, res) {
    if (req.url === '/OK') {
        console.log('Inbound "OK" request being processed...');
        res.writeHead(200);
        res.end();
    } else {
        console.log('Invalid url...');
        res.writeHead(404);
        res.end();
    }
    res.end();
}).listen(3000, function() {
    console.log('Helpful startup message...port 3000');
})