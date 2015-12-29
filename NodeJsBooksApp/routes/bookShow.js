var Book = require('../api/models/bookModel');

module.exports = function*(id) {

    var result = yield Book.findById(id);
    
    if (!result) {
        this.throw(404, 'Invalid todo ID');
    }

    yield this.render('bookShow', { book: result });
};