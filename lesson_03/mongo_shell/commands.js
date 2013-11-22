// launch mongo server: mongo
// launch mongo shell: mongod

db
show dbs

// databases and collections are created implicitly
use nickslist
db

db.listings.find();
// no documents yet

var myListing = {};
myListing.title = "Vintage Bike"
myListing.description = "70s steel schwinn road bike."

db.listings.insert(listing)
db.listings.find();

can also declare ths structures inline
db.listings.insert({title:"Eames Lounge", description:"Mahogony w/ White Corduroy"})
db.listings.find();

// now two listings!
// grab just one

use nickslist;
db.listings.findOne().pretty();

// we can update
db.listings.update({}, {category:"For Sale"});

// wait that replaced it!
db.listings.update({}, {$set: {category:"For Sale"}});
db.listings.update({title:"Vintage Bike"}, {$set: {category: "For Sale"}})

// get rid of that junk
db.listings.remove({"_id" : ObjectId("528e80876f6e86cc73356c05")})

// re-add
db.listings.insert({title:"Eames Lounge", description:"Mahogony w/ White Curdory"})
// pro-tip ctrl-r for recursive search
db.listings.update({}, {$set: {category: "Events"}}, {multi:true} )

// lots of other cool things (update operators) $set, $inc, $rename, $push
// lots of other cool things (find operators) $gt, $in, $exists
// http://docs.mongodb.org/manual/reference/operator/
// { upsert: true } http://docs.mongodb.org/manual/reference/method/db.collection.update/#db.collection.update


// goodbye everything
db.listings.remove();










