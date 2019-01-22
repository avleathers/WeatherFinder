module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 250]
            }
        },

        blog_title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 250]
            }
        },

        city_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 250]
            }
        },

        state_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 250]
            }
        },

        country_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 250]
            }
        },

        weather_condition: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 250]
            }
        },

        weather_input: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 250]
            }
        }

    });


    Post.associate = function(bloggings) {
        Post.belongsTo(bloggings.Blogger, {
          foreignKey: {
            allowNull: true
          }
        });
      };
    


    return Post;
}