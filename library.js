// Your code goes here
require("dotenv").config();

//initializng express
const express = require("express");

//express being called in a variable
const app = express();

// call for json to be used
app.use(express.json());

//initilalizing Mongodb
const { MongoClient, ObjectId } = require("mongodb");

//localbrowser: port#
const myPort = process.env.port || 3001;

class Library {
  constructor(dbUrl, dbName, colName) {
    this.dbUrl = dbUrl;
    this.dbName = dbName;
    this.colName = colName;
    this.dbClient;
  }
  async client() {
    console.log(`Your connected to ${this.dbUrl}`);
    this.dbClient = MongoClient.connect(this.dbUrl);
    console.log("Your Connection Is Succesful!");
    return this.dbClient;
  }
  async test() {
    const client = await this.client();
    client.close();
  }
  async collection() {
    const client = await this.client();
    const db = client.db(this.dbName);
    const collection = db.collection(this.colName);
    return collection;
  }
  async allBooks() {
    const collection = await this.collection();
    return collection.find({});
  }
}

app.listen(myPort, () => {
  console.log(`Connected to ${myPort}`);
});

module.exports = Library;
