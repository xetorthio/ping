var http = require('http');

http.createServer(function(req, res) {
  if(req.url == '/_internal_/healthcheck') {
    res.writeHead(200);
    res.end('pong');
  } else if(req.url == '/echo') {
    res.writeHead(200);
    var body = '';
    req.on('data', function(d) {
      body += d;
    });
    req.on('end', function() {
      var lala = JSON.parse(body);
      res.end(lala.Reason);
    });
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(3000);
