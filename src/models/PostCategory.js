module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
      'PostCategory',
      {
        postId: { 
            type: DataTypes.INTEGER, 
            allowNull: false, 
        },
        categoryId: { 
            type: DataTypes.INTEGER, 
            allowNull: false ,
        },
      },
      {
        underscored: true,
        tableName: 'posts_categories',
        timestamps: false
      },
    );
  
    PostCategory.associate = ({ BlogPost, Category }) => {
      BlogPost.belongsToMany(Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'post_id',
        otherKey: 'category_id',
      });
  
      Category.belongsToMany(BlogPost, {
        as: 'posts',
        through: PostCategory,
        foreignKey: 'category_id',
        otherKey: 'post_id',
      });
    };
  
    return PostCategory;
  };