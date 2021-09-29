const http = require('http')
const port = 8081

http.createServer(function(req, res){
    res.end("<h1>ola mundo!!</h1>")
}).listen(port)

console.log("servidor rodando na porta 8081...")