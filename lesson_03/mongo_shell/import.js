// files exported w/ 
mongoexport --db nickslist --collection listings --out listings.json

// import
mongoimport --db nickslist --collection listings --file listings.json

// mongo
use nickslist
db.find({category:"Jobs"})
