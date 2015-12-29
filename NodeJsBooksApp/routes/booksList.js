var Book = require('../api/models/bookModel');

module.exports = function*() {

    var results = yield Book.find({});
    
    yield this.render('index', { books: results });
};