const http = require('http');

const server = http.createServer((req, resp)=>{
   resp.statusCode = 200;
   resp.setHeader('Content-Type', 'text/plain');
   resp.end('servidor activo');
})

const PORT = 3000;
server.listen(PORT, ()=>{
   console.log(`Servidor activo en puerto: ${PORT}`);
})