var Book = require('../api/models/bookModel');

module.exports = function*(id) {

    yield Book.remove({ "_id": id });
    
    this.redirect('/');
};