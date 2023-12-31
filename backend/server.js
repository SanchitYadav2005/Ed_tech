require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const staticRoutes = require('./routes/staticRoutes')

app.use(express.static("assets"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes
app.use("/api/user/", userRoutes);
app.use('/',staticRoutes)

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
