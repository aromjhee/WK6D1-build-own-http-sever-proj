const http = require('http');

http.createServer(function(req, res) {
    if (req.url === '/OK') {
        console.log('Inbound "OK" request being processed...');
        res.writeHead(200);
        res.end();
    } 
    else if (req.url === '/Bad-Request') {
        console.log(`Bad client request...Page isn't working`);
        res.writeHead(400);
        res.end();
    }
    else if (req.url === '/Created') {
        console.log('Request received and new record was created...blank page');
        res.writeHead(201);
        res.end();
    }
    else if (req.url === '/Forbidden') {
        console.log('Forbidden url...access denied');
        res.writeHead(403);
        res.end();
    }
    else if (req.url === '/Found') {
        console.log('Found...blank page');
        res.writeHead(302);
        res.end();
    }
    else if (req.url === '/Gateway-Timeout') {
        console.log(`Gateway timeout...page isn't working`);
        res.writeHead(504);
        res.end();
    }
    else if (req.url === '/Internal-Server-Error') {
        console.log(`Something wrong with server...page isn't working`);
        res.writeHead(500);
        res.end();
    }
    else if (req.url === '/Moved-Permanently') {
        console.log('Url permanently moved...blank page');
        res.writeHead(301);
        res.end();
    }
    else if (req.url === '/Unauthorized') {
        console.log(`Unauthorized...page isn't working`);
        res.writeHead(401);
        res.end();
    }
    else {
        console.log('Invalid url...');
        console.log(`localhost page can't be found`);
        res.writeHead(404);
        res.end();
    }
    res.end();
}).listen(3000, function() {
    console.log('Helpful startup message...port 3000');
})