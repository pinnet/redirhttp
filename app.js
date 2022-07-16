var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(302, {'Location': `https://${req.headers.host}${req.url}`});
  res.end();    
}).listen(3000);