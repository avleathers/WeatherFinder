module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            varlidate: {
                len: [1]
            }
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        city_name: {
            type: DataTypes.STRING,
            allowNull: false,
            varlidate: {
                len: [1]
            }
        },

        state_name: {
            type: DataTypes.STRING,
            allowNull: false,
            varlidate: {
                len: [1]
            }
        },

        country_name: {
            type: DataTypes.STRING,
            allowNull: false,
            varlidate: {
                len: [1]
            }
        },

        weather_condition: {
            type: DataTypes.STRING,
            allowNull: false,
            varlidate: {
                len: [1]
            }
        },

        weather_input: {
            type: DataTypes.STRING,
            allowNull: false,
            varlidate: {
                len: [1]
            }
        }

    });


    return Post;
}