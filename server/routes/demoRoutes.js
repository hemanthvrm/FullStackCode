const requireAuth = require("../middlewares/requireAuth");

module.exports = app => {
  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  // Using route level middleware to verify user
  app.get("/checkusage", requireAuth, (req, res) => {
    res.send("Here is your data");
  });
};
