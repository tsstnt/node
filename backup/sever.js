var http = require("http");
// var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plan'})
    response.end('Hello World\n');

}).listen(25107);
console.log('Server running at http://127.0.0.1:25107/')
console.log('ok')
