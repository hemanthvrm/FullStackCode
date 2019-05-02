const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/home"); //Redirect to home page after successfull authentication
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/login"); //Redirect back to login page
  });

  app.get("/api/check_user", (req, res) => {
    res.send(req.user);
  });
};
