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
//Body Parser : Modulo que pega informações do formulario
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());

//Rotas

    app.get('/',(req,res)=>{
        //Função que lista todas as postagens 
        Post.findAll({order: [['id','ASC']]}).then((posts)=>{ //Função que ordena as postagens
            res.render('home',{posts : posts}) //Renderiza as postagens passando o array de postagem como parametro
        })
    })

    app.get('/cad',(req,res)=>{
       res.render('formulario'); //Renderiza o html do formulario
    })


    //Rota que adiciona postagens no banco
    app.post('/add',(req,res)=>{
       Post.create({  //função que da insert no banco
           titulo : req.body.titulo, //metodo que pega informação no formulario
           conteudo: req.body.conteudo,
           email : req.body.email,
           dias : req.body.dias
       })
       .then(()=>{ //função callback caso o insert de certo
           res.redirect('/'); //função que redireciona para alguma rota
       })
       .catch((erro)=>{ // função callback caso de um erro
            res.send(`Houve um erro : ${erro}`)
       })
    })

    app.get('/deletar/:id',(req,res)=>{
        Post.destroy({where: {'id' : req.params.id}})
        .then(()=>{
            res.redirect('/');
        })
        .catch((erro)=>{
            res.redirect('/');
        })
    });


    app.get('/edit/:id', function(req, res){
        Post.findByPk(req.params.id)
          .then(post => {
            res.render('form-edit', {
              id: req.params.id,
              titulo: post.titulo,
              conteudo: post.conteudo,
              email: post.email,
              dias : post.dias
            })
          })
          .catch(err => {
            res.send('Post não encontrado!')
          })
      })

      app.post('/editado/:id', function(req, res){
        Post.update({
          titulo: req.body.titulo,
          conteudo: req.body.conteudo,
          email : req.body.email,
          dias : req.body.dias
        },
        {
          where: { id: req.params.id }
        }).then(()=>{
          res.redirect('/')
        }).catch((err)=>{
          console.log(err);
        })
      })

    







//Abre um servidor na porta 8081
app.listen(8081,()=>{ // Função callback que é chamado quando o evento é disparado
  console.log("Servidor Rodando na url http//localhost:8081")  
}); 