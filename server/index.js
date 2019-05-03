const express = require("Express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const keys = require("./config/envKeys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

//App level middlewares
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 1 * 8 * 60 * 60 * 1000, // 8 Hours
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Route handlers
require("./routes/demoRoutes")(app);
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
