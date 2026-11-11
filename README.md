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

Bước 6: Nhập lệnh sau vào Terminal để chạy chương trình:

node myFirstNode.js.

Kết quả:

<img width="417" height="164" alt="image" src="https://github.com/user-attachments/assets/2d3b4f6a-c201-4640-9aed-5feaec634bff" />

Như vậy, chương trình đã tạo thành công một máy chủ HTTP bằng Node.js, lắng nghe các yêu cầu tại cổng 3000 và trả về nội dung HTML cho trình duyệt.chạy chương trình Node.js đầu tiên .


