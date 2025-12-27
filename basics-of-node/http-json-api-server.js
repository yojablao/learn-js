const http = require('http');
const url = require('url');
// const dat = require('url');

const server = http.createServer((req,res)=>{
    if (req.method === "GET")
    {
        const myURL = new URL(req.url, `http://${req.headers.host}`);
        let  date ;
        
        res.writeHead(200,{'content-type':"application/json"});
        if(myURL.pathname === "/api/parsetime")
        {
            date = new Date(myURL.searchParams.get("iso"));
            const  result = {
                "hour" : date.getHours(),
                "minute" : date.getMinutes(),
                "second" : date.getSeconds()
            }
            res.end(JSON.stringify(result));
        }
        else if(myURL.pathname === "/api/unixtime")
        {
            date  = new Date(myURL.searchParams.get("iso"));
            const  result = {
                "unixtime" : date.getTime()
            };
 
            res.end(JSON.stringify(result));
        }
        else
            res.end("bad path\n");

    }
    else
    {
        res.writeHead(404,{'content-type':"text/plain"});
        res.end("need get method\n");

    }
})
server.listen(process.argv[2])