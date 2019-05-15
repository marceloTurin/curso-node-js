var http = require('http'); // Protocoto http



http.createServer(function(req,res){ //Cria um servidor na porta 8081

    res.end("Hello World"); //Função que envia uma mensagem
}).listen(8081);

console.log("Servidor esta rodando!")