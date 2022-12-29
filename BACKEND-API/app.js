const express = require("express");
const mongoose = require("mongoose");
const PORT = 1199;
const app = express();
const exp = require("express-handlebars");
const path = require("path");
app.use(express.static("public"));
const cors = require("cors");
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/images"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
  })
);
//database connection
const connectionString = "mongodb://127.0.0.1:27017/mongocrud1";
mongoose
  .connect(connectionString)
  .then((res) => console.log("database Connected"))
  .catch((err) => console.log("Erroe:" + err));
//end connection
const mainRoutes = require("./index");
app.use("/", mainRoutes);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Work on ${PORT}`);
});
