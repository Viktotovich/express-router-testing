const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("General information, about, and contact");
});

indexRouter.get("/about", (req, res) => {
  res.send("About us");
});

indexRouter.get("/contact", (req, res) => {
  res.send("Contact us");
});

indexRouter.post("/contact", (req, res) => {
  res.send(
    "Something something we should probably take something from the req object"
  );
});

module.exports = indexRouter;
