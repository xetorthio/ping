var http = require('http');

http.createServer(function(req, res) {
  if(req.url == '/ping') {
    res.writeHead(200);
    res.end('pong');
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(3000);
