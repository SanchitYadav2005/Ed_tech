require("dotenv").config();
const express = require("express");
const app = express();
const path = require('path')
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const staticRoutes = require('./routes/staticRoutes')
const session = require("express-session");

app.use(express.static(path.join(__dirname, 'public')))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {secure: true}
}))

//routes
app.use("/api/user/", userRoutes);
app.use("/", staticRoutes);

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
