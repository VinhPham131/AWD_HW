const categoryRouter = require('./category.router');
const categoryApi = require('./categoryFetch.router');
const foodRouter = require('./food.router');

module.exports = (app) => {
    app.use('/api/categories', categoryRouter);
    app.use('/', categoryApi);
    app.use('/foods', foodRouter);  
}