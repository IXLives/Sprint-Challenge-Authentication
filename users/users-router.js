const router = require('express').Router()

const Users = require('./users-model')

const restricted = require('../auth/authenticate-middleware')

router.get('/', restricted, (req, res) => {
    Users.getAll()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router