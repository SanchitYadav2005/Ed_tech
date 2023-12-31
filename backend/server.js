require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const staticRoutes = require("./routes/staticRoutes");
const session = require("express-session");
const ExpressError = require("./utils/ExpressError");

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: true,
      expires: Date.now + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

//routes
app.use("/api/user/", userRoutes);
app.use("/", staticRoutes);

app.all("*", (req, res, next) => {
  next(new ExpressError("page not found", 404))
});

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to server and atlas on port:- ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
