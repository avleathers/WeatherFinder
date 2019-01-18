var db = require("../models");

module.exports = function(app) {

    app.get("/api/posts", function (req, res) {
        var query = {};
        if (req.query.blogger_id) {
            query.BloggerId = req.query.blogger_id;
        }

        db.Post.findAll({
            where: query
          }).then(function(dbPost) {
            res.json(dbPost);
          });

    });


    app.get("/api/posts/:id", function(req, res) {

        db.Post.findOne({
          where: {
            id: req.params.id
          }
        }).then(function(dbPost) {
          console.log(dbPost);
          res.json(dbPost);
        });
      });

      app.post("/api/posts", function(req, res) {
        console.log(req.body);
        db.Post.create(req.body).then(function(dbPost) {
          res.json(dbPost);
        });
      });
    
      app.delete("/api/posts/:id", function(req, res) {
        db.Post.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbPost) {
          res.json(dbPost);
        });
      });
    

      app.put("/api/posts", function(req, res) {
        db.Post.update(
          req.body,
          {
            where: {
              id: req.body.id
            }
          }).then(function(dbPost) {
          res.json(dbPost);
        });
      });





























}