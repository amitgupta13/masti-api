const mongodb = require("mongodb");
const { MongoClient } = mongodb;
const mongoUrl = "mongodb://localhost:27017/test";

let _db;

const initDb = callback => {
  if (_db) {
    console.log("db initialed already");
    console.log("in if(_db)", { callback });
    return callback(null, _db);
  }

  MongoClient.connect(mongoUrl)
    .then(client => {
      console.log("in MongoClient.connect(mongoUrl)", { callback });
      _db = client;
      callback(null, _db);
    })
    .catch(err => callback(err));
};

const getDb = () => {
  if (_db) {
    throw Error("Db not init");
  }

  return _db;
};

module.exports = {
  initDb,
  getDb
};
