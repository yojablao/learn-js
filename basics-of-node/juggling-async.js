const async = require('async')
const http = require('http')
const bl = require('bl')


const urls = [process.argv[2],process.argv[3],process.argv[4]]

async.map(// array,//fuction,//result callback func
    urls,
    function(url,callback) {
    http.get(url,res=> res.pipe(bl( function (err,data){
            if(err) return callback(err);
            callback(null,data.toString());})))},
        function (err,datas) {
            if(err) console.erro(err) ;else datas.forEach(r => console.log(r))
});
    
