const express = require('express');
const router = express.Router();
const { getAllUsers,createUser } = require('../controllers/users.controllers');

router.get('/', getAllUsers);
router.post('/', createUser);

module.exports = router;