const express = require('express'); // Importando modulo do express
const app = express(); //Criando uma instancia do express na variavel app
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');
const moment = require('moment')

//Config
    //Template Engine
    app.engine('handlebars',handlebars({
        defaultLayout: 'main',
        //Função que formata a data
        helpers: {
            formatDate: (date)=>{
                return moment(date).format('DD/MM/YYYY')
            }
        }
    }))
    app.set('view engine','handlebars');
//Body Parser
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());

//Rotas

    app.get('/',(req,res)=>{
        //Função que losta todas as postagens 
        Post.findAll({order: [['id','DESC']]}).then((posts)=>{ //Função que ordena as postagens
            res.render('home',{posts : posts}) //Renderiza as postagens passando o array de postagem como parametro
        })
    })

    app.get('/cad',(req,res)=>{
       res.render('formulario'); //Renderiza o html da pasta view
    })


    //Rota que adiciona postagens no banco
    app.post('/add',(req,res)=>{
       Post.create({  //função que da insert no banco
           titulo : req.body.titulo, //metodo que pega informação no formulario
           conteudo: req.body.conteudo
       })
       .then(()=>{ //função callback caso o insert de certo
           res.redirect('/'); //função que redireciona para alguma rota
       })
       .catch((erro)=>{ // função callback caso de um erro
            res.send(`Houve um erro : ${erro}`)
       })
    })




//Abre um servidor na porta 8081
app.listen(8081,()=>{ // Função callback que é chamado quando o evento é disparado
  console.log("Servidor Rodando na url http//localhost:8081")  
}); 