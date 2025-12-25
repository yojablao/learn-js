const net = require("net");

const date = new Date();
const server = net.createServer(function (socket){
    let result = date.getFullYear()+'-'+ (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours()+ ":" + date.getMinutes() + '\n';
    socket.end(result);
})
server.listen(process.argv[2]);