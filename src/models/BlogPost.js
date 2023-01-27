module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
      },
      published: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }, {
      timestams: false,
      underscored: true,
      tableName: 'blog_posts'
    });
  
    BlogPost.associate = ({ User }) => {
      BlogPost.belongsTo(User, {
        foreingKey: 'user_id', as: 'user',
      });
    };
  
    return BlogPost;
  }