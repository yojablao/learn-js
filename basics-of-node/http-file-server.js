const http = require ("http")
const fs = require("fs")
const net = require("net")



const server = http.createServer((req,res)=>{
    res.writeHead(200,{"constent-type": 'text/plain'});

    const streamfile = fs.createReadStream(process.argv[3]);
    streamfile.on("error",(err)=>{
        res.writeHead(404,{"constent-type": 'text/plain'});
        res.end("bad file path 404");
    })
    streamfile.pipe(res);
})
server.listen(process.argv[2])