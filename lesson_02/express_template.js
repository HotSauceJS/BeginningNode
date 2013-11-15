var express = require('express');
var app = express();

//app.set('views', __dirname);
//app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('template.ejs', { name: "Greg" });
});

app.listen(3000);
