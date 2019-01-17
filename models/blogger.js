module.exports = function(sequelize, DataTypes) {
    var Blogger = sequelize.define("Blogger", {
            name: DataTypes.STRING
    });
  
    Blogger.associate = function(bloggings) {
     Blogger.hasMany(bloggings.Post, {
        onDelete: "cascade"
      });
    };
  
    return Blogger;
  };
  