var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/CuH";
//the MongoDB connection
var connectionInstance;


module.exports = function(callback) {
    //if already we have a connection, don't connect to database again
    if (connectionInstance) {
        callback(connectionInstance);
        return;
    }

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        connectionInstance = db;
        callback(db);
    });
};