require("dotenv").config();
const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

const PORT = process.env.PORT;

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

app.get("/throw", (req, res, next) => {
  throw new Error("Boom");
});

app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

app.listen(PORT, () => {
  console.log(`We're live on ${PORT}`);
});

/* This is supposed to be a "catch-all" middleware */
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});
