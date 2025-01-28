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

app.listen(PORT, () => {
  console.log(`Please work. We're live on ${PORT}`);
});
