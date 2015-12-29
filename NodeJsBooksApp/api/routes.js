var route = require('koa-route');

module.exports = function router(app) {
    app.use(route.get('/', require('../routes/booksList')));
    app.use(route.get('/book/new', require('../routes/bookAdd')));
    app.use(route.get('/book/:id', require('../routes/bookShow')));
    app.use(route.get('/book/delete/:id', require('../routes/bookRemove')));
    app.use(route.get('/book/edit/:id', require('../routes/bookEdit')));
    app.use(route.post('/book/create', require('../routes/bookCreate')));
    app.use(route.post('/book/update', require('../routes/bookUpdate')));
};