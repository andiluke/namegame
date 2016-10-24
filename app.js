var express = require('express');
var app = express();
var database = require('./database');

// serving angular assets
app.use('/node_modules', express.static('node_modules'));
app.use('/systemjs.config.js', express.static('systemjs.config.js'));
app.use('/app', express.static('app'));
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/dashboard', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/names', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/names', function(req, res) {
    database.getNames(function(err, data){
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