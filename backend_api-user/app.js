const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require('./index');
const exphbs = require("express-handlebars");
const connectionString =
  "mongodb://127.0.0.1:27017/angular330";

mongoose
  .connect(connectionString)
  .then((res) => console.log("Connected to db successfully"))
  .catch((ex) => console.log(ex));

const app = express();
app.use("/Images",express.static("uploads"))
const corsOptions = {
  exposedHeaders: ["x-auth-token", "Authorization"],
};
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(cors(corsOptions));

app.use(cors());
app.use(express.json());

app.use('/', routes);

app.listen(3001, () => console.log("Listening on port 3001....."));
