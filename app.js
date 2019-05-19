const express = require('express'); // Importando modulo do express
const app = express(); //Criando uma instancia do express na variavel app
const handlebars = require('express-handlebars');
const  Sequelize = require('sequelize');

//Config
    //Template Engine
    app.engine('handlebars',handlebars({defaultLayout: 'main'}))
    app.set('view engine','handlebars');

//Conexão com o banco de dados MySql
    const sequelize = new Sequelize('teste','root','123456',{
        host: "localhost",
        dialect: "mysql"
    });





//Abre um servidor na porta 8081
app.listen(8081,()=>{ // Função callback que é chamado quando o evento é disparado
  console.log("Servidor Rodando na url http//localhost:8081")  
}); 