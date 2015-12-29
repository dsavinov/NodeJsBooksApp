var mongoose = require('mongoose');

var connection = mongoose.connect('localhost/booksDb');

module.exports = connection;