// grab all documents
db.produce.find();

// grab just one
db.produce.findOne();

// make it look better
db.produce.findOne().pretty()

// add query criteria
db.produce.find({type:"Fruit"});

// can also specific object_id, note this much match your system
db.produce.find({ _id: ObjectId("52e432fcf301e88e91232202") });

// objectid is 12 byte BSON - 4B unix timestamp, 3B machine id, 2B processor id, 3B count from random

// read more : http://docs.mongodb.org/manual/core/read-operations/