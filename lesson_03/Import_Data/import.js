// import
mongoimport --db market --collection produce --file produce.json

// mongo
use market
db.produce.find({season:"Winter"})
db.produce.find({season:"Winter"}).count()
db.produce.distinct("season");

// export
mongoexport --db market --collection produce --out produce.json

// more fun http://docs.mongodb.org/manual/reference/method/