var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end('Hello!<br>Tôi là Nguyễn Hoàng Hải');
}).listen(3000,function(){
   console.log('server đang chạy tại http://localhost:3000/')
});