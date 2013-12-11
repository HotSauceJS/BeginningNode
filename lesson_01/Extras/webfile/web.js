var http = require('http'),
  fs = require('fs');

var server = http.createServer();

server.on('request', function (req, res) {
    fs.readFile('index.html', 'utf-8', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
})

server.listen(3000);
console.log('Server running at http://localhost:3000/');
