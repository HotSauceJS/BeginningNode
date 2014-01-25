// launch mongo server: mongod
// launch mongo shell: mongo

show dbs
db

// databases and collections are created implicitly
use market

// can declare outside
var product = {};
product.item = "Mushroom";
product.price = 5.50;

db.produce.insert(mushroom);
db.produce.find();

// can also insert structures inline
db.produce.insert({item:"Beet", price: 3.00});
db.produce.find();

// they don't have to match
db.produce.insert({item:"Grapefruit", price: 2.00, type: "Fruit"});
db.produce.find();