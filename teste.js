const  Sequelize = require('sequelize');
const sequelize = new Sequelize('teste','root','123456',{
    host: "localhost",
    dialect: "mysql"
});


sequelize.authenticate()//Verifica se houve conexão com o banco
.then(()=>{
    console.log("Conectado com sucesso!");
})
.catch((erro)=>{
    console.log(`Falha ao se conectar: ${erro}`);
})


//CREATE TABLE no Sequelize
const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING //tem limite de caracteres
    },
    conteudo : {
        type: Sequelize.TEXT // nao tem limite de texto
    }

})

Postagem.sync({force: true}) //Execucao do create table

//INSERT INTO no sequelize
Postagem.create({
    titulo: "Um Titulo Qualquer",
    conteudo: "Um conteudo qualuer"
})

const Usuarios  = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

Usuarios.create({
    nome :"Marcelo",
    sobrenome : "Sousa",
    idade : "21",
    email: "marcelo.sousa@email.com"
})

Usuarios.sync({force:true});


