var http = require('http');
var url = require('url');
var fs = require('fs');
var mongoDbConnection = require('./connection.js');

console.log(JSON.stringify(mongoDbConnection));

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    mongoDbConnection(function (db) {
        console.log(db);
    })

    fs.readFile("html/" + filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        //res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });


}).listen(8081);