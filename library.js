// Your code goes here
require("dotenv").config();

//initilalizing Mongodb
const { MongoClient, ObjectId } = require("mongodb");

//class library
class Library {
  constructor(dbUrl, dbName, collName) {
    this.dbUrl = dbUrl;
    this.dbName = dbName;
    this.collName = collName;
    this.dbClient;
  }
  //mongo client connection
  async client() {
    console.log(`Your connected to ${this.dbUrl}`);
    this.dbClient = MongoClient.connect(this.dbUrl);
    console.log("Your Connection Is Succesful!");
    return this.dbClient;
  }
  //testing method
  async test() {
    const client = await this.client();
    client.close();
  }
  //async collection method
  async collection() {
    const client = await this.client();
    const db = client.db(this.dbName);
    const collection = db.collection(this.collName);
    return collection;
  }
  //async allbooks method
  async allBooks() {
    const collection = await this.collection();
    const allBooks = await allBooks.test();
    return collection.find({});
  }
}
allBooks.forEach((element) => {
  console.log(element);
});
module.exports = Library;
