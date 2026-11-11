Bài 2 — Ứng dụng Node.js đầu tiên
1. CÁCH CHẠY
Bước 1: Mở Visual Studio Code (VS Code).

Bước 2: Tạo Folder để lưu trữ chương trình Node.js.

Bước 2: Tạo tập tin myFirstNode.js.

Nhập nội dung chương trình:

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end('Hello!<br>Tôi là Nguyễn Hoàng Hải');
}).listen(3000,function(){
   console.log('server đang chạy tại http://localhost:3000/')
});
