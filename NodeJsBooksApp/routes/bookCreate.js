var Book = require('../api/models/bookModel');

module.exports = function*() {

    var input = this.request.body;
    
    var creationDate = new Date();
    
    var newbook = new Book();
    
    newbook.title = input.title;
    newbook.author = input.author;
    newbook.description = input.description;
    newbook.isbn = input.isbn;
    newbook.createdAt = creationDate;
    newbook.updatedAt = creationDate;
    
    yield newbook.save();
    
    this.redirect('/');
};