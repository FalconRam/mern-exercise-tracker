const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

require("events").EventEmitter.defaultMaxListeners = 15;

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", (err, conn) => {
  if (err) console.log(err);
  console.log(`MongoDB database connection established successfully`);
});

const exerciseRouter = require("./routes/exercise");
const userRouter = require("./routes/user");

app.use("/exercises", exerciseRouter);
app.use("/users", userRouter);

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server running on port: ${port}`);
});
