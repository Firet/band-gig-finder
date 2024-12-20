const userController = require('../controllers/user');

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
    }));

    app.post('/api/user/create/username/:username/status/:status', userController.create);
    app.get('/api/user/list', userController.list);
    app.get('/api/user/find/username/:username', userController.find);
};