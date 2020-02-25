const Version = require('../models/version.model');

module.exports = {
    index: (req, res) => {
        Version.find()
            .then( results => res.json(results) )
            .catch(err => res.status(400).json(err.errors));
    },
    create: (req, res) => {
        Version.create(req.body)
            .then(results => res.json(results) )
            .catch(err => res.status(400).json(err.errors));
    },
    show: (req, res) => {
        Version.findById({_id:req.params.id})
            .then(results => res.json(results) )
            .catch(err => res.status(400).json(err.errors));
    },
    destroy: (req, res) => {
        Version.removeOne({_id:req.params.id})
            .then(results => res.json(results) )
            .catch(err => res.status(400).json(err.errors));
    }
}