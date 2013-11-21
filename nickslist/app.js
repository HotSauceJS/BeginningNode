var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , MongoClient = require('mongodb').MongoClient
  , path = require('path');

var app = express();

MongoClient.connect('mongodb://localhost:27017/nickslist', function(err, db) {
    if(err) throw err;

    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));

    if ('development' == app.get('env')) {
        app.use(express.errorHandler());
    }

    app.get('/', routes.index(db));
    app.get('/category/:category', routes.category(db));
    app.get('/listing', routes.listing(db));
    app.post('/listing', routes.addListing(db));

    http.createServer(app).listen(app.get('port'), function(){
        console.log('Express server listening on port ' + app.get('port'));
    });
});
