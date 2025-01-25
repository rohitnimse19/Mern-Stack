// server.mjs
// import { createServer } from 'node:http';
var http = require('http');
var fs = require('fs');
var os = require ('os');

console.log(os.freemem());
console.log(os.cpus());

const server = http.createServer((req, res) => {     
  res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('{"id":1,"price":"200","title":"school bag"}');
// });
 if (req.url==="/"){
    res.write("this is default page");
    res.end();
 }
 if (req.url==="/product"){
    res.write("this is product page");
    res.end();
 }
 if (req.url==="/user"){
    res.write("this is user page");
    res.end();
 }
});
// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
