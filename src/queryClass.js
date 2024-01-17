const mongoose = require('mongoose');
const ENV = require('./ENV');

const isLocalDb = false;

class QueryClass{
  constructor() {
    this.connectionString = isLocalDb ? 
    'mongodb://localhost:27017' : 
    [
      'mongodb+srv://',
      ENV.MONGODB_USER,
      ':',
      ENV.MONGODB_PASSWORD,
      '@',
      ENV.MONGODB_HOST,
      '/',
      ENV.MONGODB_DATABASE,
      '?retryWrites=true&w=majority',
    ].join('');    

    this.connect();
  }

  response = (
    data,
    error = null,
  ) => Object({
    error,
    data,
  });

  connect = async ()=> {
    await mongoose.connect(this.connectionString)
    .then (() => console.log(`Connected successfully to MongoDB: ${this.connectionString}`))
    .catch((error) => {
      console.log(`Cannot connected to MongoDB: ${error.message}`);
      return this.response(null, error.message);
    });
  };

  get = async (Schema, filter = {}) => await Schema
    .find(filter)
    .then((data) => this.response(data))
    .catch((error) => {
      console.log(`MongoDb Error: ${error.message}`);
      return this.response(null, error.message);
    });

  add = async (Schema, data) => await new Schema(data)
    .save()
    .then((added) => this.response(added))
    .catch((error) => {
      console.log(`MongoDb  Add : ${error.message}`);
      return this.response(null, error.message);
    });

  modify = async (Schema, id, data) => await Schema
    .findByIdAndUpdate(id, data, { new: true })
    .then((modified) => this.response(modified))
    .catch((error) => {
      console.log(`MongoDb Error: ${error.message}`);
      return this.response(null, error.message);
    });

  remove = async (Schema, id) => await Schema
    .findByIdAndDelete(id)
    .then((removed) => this.response(removed))
    .catch((error) => {
      console.log(`MongoDb Error: ${error.message}`);
      return this.response(null, error.message);
    });
}

module.exports = new QueryClass();