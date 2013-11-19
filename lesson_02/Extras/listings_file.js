fs = require('fs'),
  path = require('path');

var filename = path.resolve('data.json');

function get() {
    fs.readFile(filename, 'utf-8', function(err, data) {
        if (err) throw(err);
        console.log(data);

        listings = JSON.parse(data);
        console.log(listings);
    });
}

function set(newValue) {
    fs.writeFile(filename, JSON.stringify(newValue), function (err) {
        if (err) throw err;
        console.log('saved!');
    });
}

function push(newValue) {
    fs.readFile(filename, 'utf-8', function(err, data) {
        if (err) throw(err);
        collection = JSON.parse(data);
        collection.push(newValue);
        set(collection);
    });
}

push('yaay');
