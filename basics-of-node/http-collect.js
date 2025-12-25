const http = require("http");
const bl = require("bl");

let data ='';
http.get(process.argv[2],(res)=>{
    res.setEncoding("utf8");

    res.pipe(bl( function(err,msg)
            {
                if(err)
                    return;
                data += msg
            }))
    res.on("end",(chunk)=>{
        console.log(data.length);
        console.log(data);
    })
}).on("error",console.error )
