var db = require("../models");

module.exports = function(app) {
  app.get("/api/bloggers", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.Blogger.findAll({}).then(function(dbBlogger) {
      res.json(dbBlogger);
    });
  });

  app.get("/api/bloggers/:id", function(req, res) {
    // 2; Add a join to include all of the Blogger's Posts here
    db.Blogger.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbBlogger) {
      res.json(dbBlogger);
    });
  });

  app.post("/api/bloggers", function(req, res) {
    db.Blogger.create(req.body).then(function(dbBlogger) {
      res.json(dbBlogger);
    });
  });

  app.delete("/api/bloggers/:id", function(req, res) {
    db.Blogger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBlogger) {
      res.json(dbBlogger);
    });
  });

};
