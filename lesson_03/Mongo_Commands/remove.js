// get rid of that junk
db.listings.remove({"_id" : ObjectId("528e80876f6e86cc73356c05")})

// goodbye everything
db.listings.remove();