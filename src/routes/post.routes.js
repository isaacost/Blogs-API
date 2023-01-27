const { Router } = require('express');
const { postController } = require('../controller');
const { validateCreatePost } = require('../middleware/validateCreatePost');
const { validateToken } = require('../middleware/validateToken');

const router = Router();

router.post('/post', validateToken, validateCreatePost, postController.create);
router.get('/post', validateToken, postController.findAll);
router.get('/post/:id', validateToken, postController.findById);

module.exports = router;