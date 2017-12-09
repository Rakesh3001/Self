
var express = require('express');
const bodyParser = require('body-parser');
const app = express();
port = Number(process.env.PORT || 3030);

var MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://Project1:Yuri1234@cluster0-shard-00-00-jc5l8.mongodb.net:27017,cluster0-shard-00-01-jc5l8.mongodb.net:27017,cluster0-shard-00-02-jc5l8.mongodb.net:27017/Self?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
var database;
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
console.log("Connected successfully to server");
 database = db;
});

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


// POST a new User.
// (Accessed at POST http://localhost:3030/adduser+, Request is user object)

app.post('/adduser', function(req, res) {
    var collection = database.collection('userdetails');
    // Insert some documents
    collection.insertMany([
        req.body
    ], function(err, result) {
        if(err)
            res.json(err);
        else{
            res.json("Successfull");
            console.log("Done");
        }
    });
    
  });

  // (Accessed at POST http://localhost:3030/selectuser, Request is user object)
  app.post('/selectuser', function(req, res) {
    var collection = database.collection('userdetails');
    var query = req.body;
    // Select customer data
    collection.find(query).toArray(function(err, result) {
        if(err)
            res.json(err);
        else{
            res.json(result);
            console.log("Done");
        }
    });
    
  });

    // (Accessed at POST http://localhost:3030/updateuser, Request is user object)
    app.post('/updateuser', function(req, res) {
        var collection = database.collection('userdetails');
        var myquery = {username: req.body.username};
        console.log(myquery);
        var newvalues = req.body;
        // Update customer data
        collection.updateOne(myquery, newvalues, function(err, result) {
            if(err)
                res.json(err);
            else{
                res.json(result);
                console.log("Done");
            }
        });
        
      });

// Define the home page route.
// app.get('/', function(req, res) {
// res.send('Our first route is working.:)');
// });



// START THE SERVER
// ===============================================

app.listen(port, function() {
console.log('Listening on port ' + port);
});