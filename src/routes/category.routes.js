const { Router } = require('express');
const { categoryController } = require('../controller');
const { validateToken } = require('../middleware/validateToken');

const router = Router();

router.post('/categories', validateToken, categoryController.create);

module.exports = router;