const { BlogPost, Category, PostCategory, User } = require('../models');

const create = async (id, body) => {
  const { title, content, categoryIds } = body;
  const invalidIds = {
    type: 400,
    message: 'one or more "categoryIds" not found',
  };

  if (categoryIds.length === 0) return invalidIds;

  const existsAllCategories = await Promise.all(
    categoryIds.map(async (e) => Category.findByPk(e)),
  );

  if (existsAllCategories.some((e) => e === null)) return invalidIds;

  const newPost = await BlogPost.create({ title, content, userId: id });

  const createdPost = await BlogPost.findByPk(newPost.id);

  const postId = 'post_id';
  const categoryId = 'category_id';

  const objects = categoryIds.map((e) => ({ [postId]: createdPost.id, [categoryId]: +e }));

  await PostCategory.bulkCreate(objects);

  return { type: 201, message: createdPost };
};

const findAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  return { type: 200, message: posts };
};
module.exports = {
  create,
  findAll,
};