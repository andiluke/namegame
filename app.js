var express = require('express');
var app = express();

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

var getNames = function(cb) {
    database.collection('names').find().toArray(cb);
}


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/names', function(req, res) {
    getNames(function(err, data){
        if (err){
            console.log(err);
            return res(err);
        } else {
            console.log(data);
            return res.json(data);
        }
        
    })
});

app.get('/api/name/:id', function(req, res) {
    res.send('this should be json of name id: ' + req.params.id);
});

app.post('/api/name', function(ref, res) {
    res.send('this would be posting a name to the db');
});

app.delete('api/name', function(req, res){
    res.send('this would be deleteing a name');
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});