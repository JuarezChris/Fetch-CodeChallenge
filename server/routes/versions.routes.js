const VersionController = require('../controllers/versions.controller');

module.exports = (app) => {
    app.get('/api/version', VersionController.index)
    app.get('/api/version/:id', VersionController.show)
    app.post('/api/version', VersionController.create)
    app.delete('/api/version/:id', VersionController.destroy)
}