const { Router } = require('express');
const { userController } = require('../controller');
const { validateLogin } = require('../middleware/validateLogin');
const { validateToken } = require('../middleware/validateToken');

const router = Router();

router.post('/login', validateLogin, userController.userLogin);
router.post('/user', userController.create);
router.get('/user', validateToken, userController.findAll);
router.get('/user/:id', validateToken, userController.findById);

module.exports = router;
