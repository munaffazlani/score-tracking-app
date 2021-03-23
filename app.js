const createError = require("http-errors");
const express = require("express");
const path = require("path");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const router = require("./routes");
const mongoose = require("mongoose");

const app = express();
app.use(cors());

// connect to mongodb database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("lov"))
  .catch((err) => console.log(err));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/sendscore", router.handleScore);

app.use("*", express.static("frontend/build"));
app.get("*", (req, res) => {
  console.log("reached");
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(process.env.PORT || 3003, () => {
  console.log(`server started on port ${process.env.PORT || 3003}`);
});
