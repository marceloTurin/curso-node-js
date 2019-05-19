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
}); 