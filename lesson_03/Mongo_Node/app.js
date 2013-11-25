var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://127.0.0.1:27017/nickslist', function(err, db) {
    if(err) throw err;

    db.collection('listings').find().each( function(err, doc){
        if (doc == null) return db.close();
        console.log(doc.title);
    });
})
