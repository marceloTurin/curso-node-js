const express = require('express'); // Importando modulo do express
const app = express(); //Criando uma instancia do express na variavel app


//Rota principal do app
app.get("/",(req,res)=>{ //req é uma requisição recebida, e rep são as respostas da requisição
    res.send("Seja bem-vindo ao meu app!"); // Envia uma mensagem do usuário
});

//Rota sobre
app.get("/sobre",(req,res)=>{
    res.send("Minha Pagina Sobre");
});

//Rota do Blog
app.get("/blog",(req,res)=>{
    res.send("Bem Vindo ao Meu Blog!");
});

app.get('/ola/:nome/:cargo/:cor',(req,res)=>{ //Passando parametros na rota
    res.send(`<h1>Olaaa ${req.params.nome}<h1> 
              <h2>Seu cargo e: ${req.params.cargo}</h2> 
              <h3>Sua cor favorita e: ${req.params.cor}</h3>`
            ); //Obtendo os parametros da requisição
  
})


//Abre um servidor na porta 8081
app.listen(8081,()=>{ // Função callback que é chamado quando o evento é disparado
  console.log("Servidor Rodando na url http//localhost:8081")  
}); 