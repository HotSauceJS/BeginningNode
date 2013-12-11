fs = require('fs');

var filename = 'demo.txt';
var encoding = 'utf-8';
var callback = function(err, data) {
    if (err) throw err;
    console.log(data);
}

fs.readFile(filename, encoding, callback);
