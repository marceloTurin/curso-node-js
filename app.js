const express = require('express'); // Importando modulo do express
const app = express(); //Criando uma instancia do express na variavel app
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')


//Config
    //Template Engine
    app.engine('handlebars',handlebars({defaultLayout: 'main'}))
    app.set('view engine','handlebars');
//Body Parser
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());

//Rotas
    app.get('/cad',(req,res)=>{
       res.render('formulario'); //Renderiza o html da pasta view
    })

    app.post('/add',(req,res)=>{
        req.body.conteudo //Pega o conteudo do formulario atraves do name
        res.send(`Texto: ${req.body.titulo} Conteudo ${req.body.conteudo}`)
        res.send("Formulario recebido");
    })




//Abre um servidor na porta 8081
app.listen(8081,()=>{ // Função callback que é chamado quando o evento é disparado
  console.log("Servidor Rodando na url http//localhost:8081")  
}); 