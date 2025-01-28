require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => res.send("Hello, world!"));

app.post("/messages", (req, res) =>
  res.send("This is where you can see any messages.")
);

app.get("/:username/messages", (req, res) => {
  console.log("Params:", req.params);
  console.log("Query:", req.query);
  res.end();
});

app.get("/:username/messages/:messageId", (req, res) => {
  console.log(req.params);
  res.end();
});

app.get("*", (req, res) => res.send("404, Page not Found"));

app.listen(PORT, () => {
  console.log(`Works well, listening on port ${PORT}`);
});
