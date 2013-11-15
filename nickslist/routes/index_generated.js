var categories = ['jobs', 'events', 'for sale'];

var listings = function(category) {
    var returnArray = [];
    for (var i = 0; i<3; i++) {
        returnArray.push({ title: category + ' ' + i,
                           description: "longer description.",
                           user: "emailaddress" });
    }
    return returnArray;
};

exports.index = function(req, res){
  res.render('index', { title: 'Nicks List', categories: categories });
};

exports.category = function(req, res){
  var category = req.params.category;
  res.render('category', { title: req.params.category, listings: listings(category) });
};

exports.addListing = function(req, res){
  res.send ("listing added");
};

exports.listing = function(req, res){
  res.render('listing', {title: "New Listing"});
};
