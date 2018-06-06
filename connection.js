var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/CuH";
//the MongoDB connection
var connectionInstance;

console.log("1");
module.exports = function(callback) {
    console.log("2");
    //if already we have a connection, don't connect to database again
    if (connectionInstance) {
        callback(connectionInstance);
        return;
    }

    MongoClient.connect(url, function(err, db) {
        console.log("3");
        if (err) throw err;
        connectionInstance = db;
        callback(db);
    });
};