const express = require('express');
const router = express.Router();
// all user controller require
const userController = require('../controller/userController');


// all router
router.get('/', userController.getallUserController);
router.get('/:id', userController.getSingleUserController);
router.post('/', userController.createUserController);
router.put('/:id', userController.updateUserController);
router.delete('/:id', userController.deleteUserController);

module.exports = router;
