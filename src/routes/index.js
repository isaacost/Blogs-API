const { Router } = require('express');
const userRoutes = require('./user.routes');
const categoryRoutes = require('./category.routes');
const postRoutes = require('./post.routes');

const router = Router();

router.use(userRoutes);
router.use(categoryRoutes);
router.use(postRoutes);

module.exports = router;
