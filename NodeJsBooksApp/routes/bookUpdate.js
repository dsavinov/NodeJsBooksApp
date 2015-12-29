var Book = require('../api/models/bookModel');

module.exports = function*() {

    var input = this.request.body;
    

    yield Book.update({ _id: input.id }, {
        title: input.title,
        author: input.author,
        description: input.description,
        isbn: input.isbn,
        createdAt: new Date(input.At),
        updatedAt: new Date()
    });

    this.redirect('/');
};