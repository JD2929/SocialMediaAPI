const { User, Thought } = require('../models');

const userQueries = {
    getUsers(req, res) {
        User.find()
            .select('-__v')
            .then((users) => {
                res.json(users)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    getOneUser(req, res) {
        console.log('I got to the getOneUser')
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) => {
                !user ? res.status(404).json({ message: 'No user found with this ID' }) : res.json(user)
            })
            .catch((err) => {
                console.log(err)
                res.status(500).json(err)
            })
    },

    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err))
    }
}

module.exports = userQueries;