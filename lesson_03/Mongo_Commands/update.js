// we can update
db.listings.update({}, {category:"For Sale"});

// wait that replaced it!
db.listings.update({}, {$set: {category:"For Sale"}});
db.listings.update({title:"Vintage Bike"}, {$set: {category: "For Sale"}})

db.listings.update({}, {$set: {category: "Events"}}, {multi:true})
