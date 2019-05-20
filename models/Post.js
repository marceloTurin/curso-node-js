const db = require('./db');

const Post = db.sequelize.define('postagens',{
  titulo : {
    type: db.Sequelize.STRING
  },
   conteudo : {
       type : db.Sequelize.TEXT
   },
   email : {
       type : db.Sequelize.STRING
   },
   dias : {
       type : db.Sequelize.INTEGER
   }
})

//Post.sync({force:true})

module.exports = Post;