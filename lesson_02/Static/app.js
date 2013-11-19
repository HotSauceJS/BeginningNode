var express = require('express');
var app = express();

app.use(app.router);
app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/maybe', function(req, res){
  res.send('maybe this works');
});

app.listen(3000);
