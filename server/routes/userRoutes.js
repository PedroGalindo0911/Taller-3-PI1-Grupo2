const express = require('express');
const router = express.Router();
const { addUser, getUsers, updateUser, deleteUser } = require('../controllers/userActions');

router.get('/', getUsers);

router.post('/', addUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;