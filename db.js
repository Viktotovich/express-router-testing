//mock database

const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

async function getAuthorById(authorId) {
  return authors.find((author) => {
    return author.id === authorId;
  });
}

module.exports = { getAuthorById };
