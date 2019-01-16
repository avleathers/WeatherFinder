module.exports = function(sequelize, DataTypes) {
    var Blogger = sequelize.define("Blogger", {
            name: DataTypes.STRING
    });
  
    Blogger.associate = function(models) {
     Blogger.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    return Blogger;
  };
  