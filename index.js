var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');
var module3 = require('./app');

http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(module3.account());
  res.write(module3.amount() + '\n');


  res.end(); // ok to send response
}).listen(3000);
