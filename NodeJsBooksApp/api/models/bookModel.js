var context = require('../context');

var schema = new context.Schema(
    {
        title: String,
        author: String,
        description: String,
        isbn: String
    });

module.exports = context.model('book', schema);