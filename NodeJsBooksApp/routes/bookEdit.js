var Book = require('../api/models/bookModel');

module.exports = function*(id) {

    var result = yield Book.findById(id);
    
    // Bad ID provided?
    if (!result) {
        this.throw(404, 'The book with current Id was not found!');
    }
    
    // Render template
    yield this.render('bookEdit', { book: result });
};