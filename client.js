// Your code goes here
const Library = require("/library.js");

const collectionString = "mongodb://localhost:27017/";

const collection = new Library(collectionString, "library", "books");

collection().test();

const allBooks = await allBooks().test();
