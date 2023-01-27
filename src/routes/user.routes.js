const { Router } = require('express');
const { userController } = require('../controller');
const { validateLogin } = require('../middleware/validateLogin');

const router = Router();

router.post('/login', validateLogin, userController.userLogin);
router.post('/user', userController.create);

module.exports = router;
