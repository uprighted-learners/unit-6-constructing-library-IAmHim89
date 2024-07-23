// Your code goes here
//?library import
const Library = require("./library.js");

//compass connection string
const collectionString = "mongodb://localhost:27017";

//initializng a new library
const collection = new Library(collectionString, "Library", "Books");

//?new library variable test connection to compass
collection.test();

//Get all book collection function
async function getBooks() {
  const allBooks = await collection.allBooks();

  for await (element of allBooks) {
    console.log(element);
  }
}
//getBooks();

//Get one book function from collection
async function oneBook() {
  const findOneBook = await collection.findOneBook("669eb98f4d273de543d657ed");
  for await (element of findOneBook) {
    console.log(element);
  }
}
//oneBook();

async function manyBooks() {
  const findManyBooks = await collection.findManyBooks({ Copies: 2 });
  for await (element of findManyBooks) {
    console.log(findManyBooks);
  }
}
manyBooks();
