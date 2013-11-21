exports.index = function(db) {
    return function(req, res){
        db.collection('listings').distinct('category', function(err, categories) {
            res.render('index', { title: 'Nicks List', categories: categories });
        });
    };
};

exports.category = function(db) {
    return function(req, res){
        var category =  req.params.category
        var query = {category: req.params.category};
        db.collection('listings').find(query).toArray(function(err, listings) {
            res.render('category', { title: category, listings: listings });
        });
    }
}

exports.addListing = function(db) {
    return function(req, res){
        var newPost = 
            {title: req.body.title,
             user: req.body.user,
             description: req.body.description,
             category: req.body.category
            };
        db.collection('listings').insert(newPost, function(err, inserted) {
            if (err) console.log(err);
            res.send ("listing added");
        });
    };
};

exports.listing = function(db) {
    return function(req, res){
        res.render('listing', {title: "New Listing"});
    };
};

