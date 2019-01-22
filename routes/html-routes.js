var path = require("path");

module.exports = function(app) {


    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/html/index.html"));
    });
  
  
    app.get("/cms", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/html/cms.html"));
    });
  
  
    app.get("/blog", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/html/index.html"));
    });
  
    app.get("/bloggers", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/html/blogger.html"));
    });
  
  };
  