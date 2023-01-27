module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
      'PostCategory',
      {
        postId: { 
            type: DataTypes.INTEGER, 
            foreingKey: true, 
            allowNull: false, 
        },
        categoryId: { 
            type: DataTypes.INTEGER, 
            foreingKey: true, 
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
        as: 'users',
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