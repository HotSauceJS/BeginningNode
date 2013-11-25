// files exported w/ 
mongoexport --db nickslist --collection listings --out listings.json

// import
mongoimport --db nickslist --collection listings --file listings.json

// mongo
use nickslist
db.listings.find({category:"Jobs"}).count()
db.listings.find({category:"Jobs"})
db.listings.find({category:"Jobs"}).pretty()

db.listings.distinct("category");

// more fun http://docs.mongodb.org/manual/reference/method/
