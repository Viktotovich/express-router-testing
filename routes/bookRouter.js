const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => {
  res.send("You can find the books you need here");
});

bookRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book ID:${bookId}`);
});

bookRouter.get("/:bookId/reserve", (req, res) => {
  res.send("uhhh, the what now??");
});

bookRouter.post("/books/:bookId/reserve", (req, res) => {
  res.send("SOS");
});

module.exports = bookRouter;
