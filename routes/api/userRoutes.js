const router = require ('express').Router();

const {getUsers, getOneUser, createUser} = require('../../controllers/userControllers')

router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getOneUser);

module.exports = router;