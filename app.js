var express = require('express');
var bodyParser = require('body-parser');

var database = require('./database');

var app = express();


// for parsing passed json
app.use(bodyParser.json())

// serving angular assets
app.use('/node_modules', express.static('node_modules'));
app.use('/systemjs.config.js', express.static('systemjs.config.js'));
app.use('/app', express.static('app'));
app.use('/assets', express.static('assets'));

// angular got this
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/dashboard', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/names', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/detail/:name', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
// end of angular urls

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

app.get('/api/name/:name', function(req, res) {
    console.log('getting info for: ' + req.params.name);
    database.getName(req.params.name, function(err,data){
        if (err){
            console.log(err);
            return res(err);
        } else {
            console.log(data);
            return res.json(data);
        }
    });
});

app.post('/api/name', function(req, res) {
    res.send('this would be posting a name to the db');
});

app.put('/api/name', function(req, res) {
    console.log('this would be updating a name');
    console.log(req.body);
    database.updateName(req.body);
});

app.delete('/api/name', function(req, res){
    res.send('this would be deleteing a name');
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});