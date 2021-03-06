var MongoClient = require('mongodb').MongoClient;
var database;

MongoClient.connect('mongodb://localhost:27017/babynames', function(err, db) {
  if (err) {
    throw err;
  }
  database = db;
  database.collection('names').find().toArray(function(err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
  });
});

module.exports.getNames = function(cb) {
  database.collection('names').find().toArray(cb);
}

module.exports.getName = function (babyname, cb) {
  database.collection('names').find({name: babyname}).toArray(cb);
}

module.exports.updateName = function(babyname, cb) {
  console.log('hi from updateName');
  console.log(babyname);
  database.collection('names').update(
    {name: babyname.name},
    {
      $set: {"middle": babyname.middle}
    }
  )
}
