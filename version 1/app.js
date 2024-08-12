const http = require('http');
const { url } = require('inspector');

const server = http.createServer((req,res)=>{
const url=req.url;
if(url==="/"){
res.setHeader('content-Type','text/html');
res.write('<html><head>hello from my node js<button type="submit">Submit</button></head></html>')
res.end();
}

});
server.listen(3000);
