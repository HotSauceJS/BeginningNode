
exports.index = function(db) {
    return function(req, res){
        res.render('index', { title: 'Nicks List', categories: [] });
    };
};

exports.category = function(db) {
    return function(req, res){
        var category = req.params.category;
        res.render('category', { title: req.params.category, listings: [] });
    };
}

exports.addListing = function(db) {
    return function(req, res){
        collection[req.body.category].push(
            {title: req.body.title,
             user: req.body.user,
             description: req.body.description}
        );
        res.send ("listing added");
    };
};

exports.listing = function(db) {
    return function(req, res){
        res.render('listing', {title: "New Listing"});
    };
};

