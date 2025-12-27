const http = require ("http");
const map = require ("through2-map");

server = http.createServer((req,res)=>
{
    if(req.method !== 'post')
        return res.end("post req please")
    req.pipe(map((msg)=>{
        return msg.toString().toUpperCase()
    })).pipe(res);
})
server.listen(process.argv[2]);