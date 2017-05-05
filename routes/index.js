var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');

router.route('/v1/users/:id')
    .get(userController.getUsers);

router.route('/v1/users')
    .get(userController.getUsers2);

module.exports = router;
