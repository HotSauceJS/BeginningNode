var collection = {jobs:[], events:[], 'for sale':[]};

exports.index = function(req, res){
  res.render('index', { title: 'Nicks List', categories: Object.keys(collection) });
};

exports.category = function(req, res){
  var category = req.params.category;
  res.render('category', { title: req.params.category, listings: collection[category] });
};

exports.addListing = function(req, res){
  collection[req.body.category].push(
      {title: req.body.title,
      user: req.body.user,
      description: req.body.description}
  );
  res.send ("listing added");
};

exports.listing = function(req, res){
  res.render('listing', {title: "New Listing"});
};

