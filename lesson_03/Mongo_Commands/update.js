// grab all documents
db.produce.find();

// keep id
var query = {"_id" : ObjectId("52e43321f301e88e91232203")}

// we can update
db.produce.update(query, {type: "Vegetable"});

// take a look
db.produce.find();
db.produce.find(query);

// wait that replaced it!
db.produce.find();
var query = {"_id" : ObjectId("52e432fcf301e88e91232202")}

// use $set operator
db.produce.update(query, {type: "Fungi"});

// fix Beet
var query = {"_id" : ObjectId("52e43321f301e88e91232203")}
db.produce.update(query, {$set: {item:"Beet", price: 3.00}});

// no query, or multiple matches
db.produce.update({}, {$set: {season: "Spring"}});
db.produce.find()
db.produce.update({}, {$set: {season: "Spring"}}, {multi:true});

// read more: http://docs.mongodb.org/manual/core/write-operations/