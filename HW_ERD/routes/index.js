const categoryRouter = require('./category.router');
const categoryApi = require('./categoryFetch.router');

module.exports = (app) => {
    app.use('/api/categories', categoryRouter);
    app.use('/', categoryApi);
}