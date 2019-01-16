var db = require("../models");

module.exports = function(app) {
  app.get("/api/bloggers", function(req, res) {

    db.Blogger.findAll({}).then(function(dbBlogger) {
      res.json(dbBlogger);
    });
  });

  app.get("/api/bloggers/:id", function(req, res) {

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
